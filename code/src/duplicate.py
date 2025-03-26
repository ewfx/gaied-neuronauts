import os
import email
import pandas as pd
import io
import pytesseract
import docx
import pypdf
import json
from email.policy import default
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from datetime import datetime, timedelta
from PIL import Image
from classification import classify_email
from dataextraction import query_documents

# Step 1: Load Emails from Folder
def load_emails(folder_path):
    email_bodies = []  # Store plain-text bodies
    email_subjects = []  # Store subjects
    metadata = []  # Store metadata (sender, recipient, date)
    attachments = []  # Store attachments
    mergedresults=[]
    for filename in os.listdir(folder_path):
        email_bodies, email_subjects, metadata, attachments=extract_eml_content(filename, folder_path)
        
        classification = classify_email(email_bodies)
        fields = query_documents("../json/DataExtractionFields.json", attachments,classification)
        duplicates=duplicate(email_bodies,email_subjects,metadata,attachments)
        combined_output = {
                "classification": classification,
                "fields": fields,
                "duplicates": duplicates
            }
        mergedresults.append(combined_output)
    return mergedresults

def extract_eml_content(filename, folder_path):
    email_bodies = []  # Store plain-text bodies
    email_subjects = []  # Store subjects
    metadata = []  # Store metadata (sender, recipient, date)
    attachments = []  # Store attachments
    if filename.endswith(".eml"):  # Ensure `.eml` format
            file_path = os.path.join(folder_path, filename)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    raw_email = f.read()
                    msg = email.message_from_string(raw_email, policy=default)

                    email_body, email_attachments = process_email(msg)

                    email_date_str = msg["Date"]
                    if email_date_str:
                        email_date = datetime.strptime(email_date_str, "%a, %d %b %Y %H:%M:%S %z")
                        if email_date >= datetime.now(email_date.tzinfo) - timedelta(days=10):
                            email_bodies.append(email_body)
                            email_subjects.append(msg["Subject"])  # Subject of the email
                            metadata.append({
                                "sender": msg["From"],
                                "recipient": msg["To"],
                                "date": msg["Date"],
                            })
                            attachments.append(email_attachments)
                    else:
                        email_bodies.append(email_body)
                        email_subjects.append(msg["Subject"])  # Subject of the email
                        metadata.append({
                            "sender": msg["From"],
                            "recipient": msg["To"],
                            "date": msg["Date"],
                        })
                        attachments.append(email_attachments)
                    return email_bodies, email_subjects, metadata, attachments
            except Exception as e:
                print(f"Error processing file {file_path}: {e}")
                return None,None,None,None


def process_email(msg):
        email_body = ""
        email_attachments = []

        if msg.is_multipart():
            for part in msg.iter_parts():
                if part.get_content_type() == "text/plain":
                    email_body += part.get_content()
                elif part.get_content_type() == "text/html":
                    email_body += part.get_content()
                elif part.get_content_disposition() == "attachment":
                    attachment_content = part.get_payload(decode=True)
                    attachment_text = extract_text_from_attachment(attachment_content, part.get_content_type())
                    email_attachments.append(attachment_text)
                elif part.get_content_type() == "multipart/alternative":
                    for subpart in part.iter_parts():
                        if subpart.get_content_type() == "text/plain":
                            email_body += subpart.get_content()
                        elif subpart.get_content_type() == "text/html":
                            email_body += subpart.get_content()
                elif part.get_content_type() == "message/rfc822":
                    nested_body, nested_attachments = process_email(part.get_payload(0))
                    email_body += nested_body
                    email_attachments.extend(nested_attachments)
        else:
            email_body = msg.get_content()

        return email_body, email_attachments

def extract_text_from_attachment(attachment_content, content_type):
        """Extracts text from attachments based on content type."""
        if "image" in content_type:
            try:
                with io.BytesIO(attachment_content) as image_file:
                    img = Image.open(image_file)
                    text = pytesseract.image_to_string(img)
                    return text
            except Exception as e:
                print(f"OCR failed: {e}")
                return ""
        elif "pdf" in content_type:
            try:
                pdf_file = io.BytesIO(attachment_content)
                reader = pypdf.PdfReader(pdf_file)
                text = ""
                for page in reader.pages:
                    text += page.extract_text() or ""
                return text
            except Exception as e:
                print(f"PDF extraction failed: {e}")
                return ""
        elif "word" in content_type or "docx" in content_type:
            try:
                doc = docx.Document(io.BytesIO(attachment_content))
                text = "\n".join([paragraph.text for paragraph in doc.paragraphs])
                return text
            except Exception as e:
                print(f"Docx extraction failed: {e}")
                return ""
        else:
            return ""  # if not supported, return empty string
            
# Step 2: Initialize the Model
def initialize_model():
    try:
        return SentenceTransformer('all-MiniLM-L6-v2')
    except Exception as e:
        print(f"Error initializing model: {e}")
        return None

# Step 3: Generate Embeddings
def generate_embeddings(email_bodies, attachments, model):
    try:
        combined_texts = [body + " ".join([att if isinstance(att, str) else att.decode('utf-8', errors='ignore') for att in att_list]) for body, att_list in zip(email_bodies, attachments)]
        return model.encode(combined_texts)
    except Exception as e:
        print(f"Error generating embeddings: {e}")
        return []

# Step 4: Detect Duplicates (Combined Rules)
def detect_duplicates_with_config(email_bodies_src,email_subjects_src,metadata_src,source_embeddings,   email_bodies_des, email_subjects_des, metadata_des,dest_embeddings, threshold=0.85, verify_threshold=0.5, config={}):
    """
    Detect duplicate emails with configurable metadata rules.
    Args:
        email_bodies: List of email text content.
        email_subjects: List of email subjects.
        metadata: List of metadata dictionaries (sender, recipient, date).
        embeddings: Generated embeddings for email bodies.
        threshold: Similarity score threshold for duplicate detection.
        config: Dictionary of configuration options for metadata rules.
    Returns:
        duplicate_flags: List of flags indicating duplicate status and confidence scores.
    """
    try:
        similarity_matrix = cosine_similarity(source_embeddings, dest_embeddings)
        duplicate_flags = [None] * len(email_bodies_src)  # Initialize flags for all emails
        verify_flags = [None] * len(email_bodies_src)  # Initialize flags for verification
        

        for i in range(len(email_bodies_src)):
            for j in range(len(email_bodies_des)):

                # Apply metadata rules based on user configuration
                subject_match = config.get("check_subject", True)
                sender_match = config.get("check_sender", True)
                recipient_match = config.get("check_recipient", False)  # Optional
                date_match = config.get("check_date", False)  # Optional
                content_match = config.get("check_content", True)

                # Rule logic for metadata and content
                reasons = []
                if subject_match and email_subjects_src[i] == email_subjects_des[j]:
                    reasons.append({"reason": "subject", "confidence": similarity_matrix[i][j], "subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})
                if sender_match and metadata_src[i]["sender"] == metadata_des[j]["sender"]:
                    reasons.append({"reason": "sender", "confidence": similarity_matrix[i][j], "subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})
                if recipient_match and metadata_src[i]["recipient"] == metadata_des[j]["recipient"]:
                    reasons.append({"reason": "recipient", "confidence": similarity_matrix[i][j], "subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})
                if date_match and metadata_src[i]["date"] == metadata_des[j]["date"]:
                    reasons.append({"reason": "date", "confidence": similarity_matrix[i][j], "subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})
                if content_match and similarity_matrix[i][j] > threshold:
                    reasons.append({"reason": "content", "confidence": similarity_matrix[i][j], "subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})
                # Filter reasons by threshold
                reasons = [reason for reason in reasons if reason["confidence"] > threshold]
                
                # Combine rules
                if reasons:
                    if duplicate_flags[i] is None or duplicate_flags[i] is False:
                        duplicate_flags[i] = {"reasons": reasons}  # Mark as duplicate with reasons
                    else:
                        duplicate_flags[i]["reasons"].extend(reasons)
                        
                else:
                    if duplicate_flags[i] is None:
                        duplicate_flags[i] = False  # Mark as not duplicate

                # Check for verification threshold
                if not duplicate_flags[i] and similarity_matrix[i][j] > verify_threshold:
                    verify_reasons = []
                    if subject_match and email_subjects_src[i] == email_subjects_des[j]:
                        verify_reasons.append({"reason": "subject", "confidence": similarity_matrix[i][j], "subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})
                    if sender_match and metadata_src[i]["sender"] == metadata_des[j]["sender"]:
                        verify_reasons.append({"reason": "sender", "confidence": similarity_matrix[i][j],"subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})
                    if recipient_match and metadata_src[i]["recipient"] == metadata_des[j]["recipient"]:
                        verify_reasons.append({"reason": "recipient", "confidence": similarity_matrix[i][j], "subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})
                    if date_match and metadata_src[i]["date"] == metadata_des[j]["date"]:
                        verify_reasons.append({"reason": "date", "confidence": similarity_matrix[i][j], "subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})
                    if content_match and similarity_matrix[i][j] > verify_threshold:
                        verify_reasons.append({"reason": "content", "confidence": similarity_matrix[i][j], "subject": email_subjects_des[j], "duplicate_email": metadata_des[j]["sender"]})

                    # Filter reasons by verify threshold
                    verify_reasons = [reason for reason in verify_reasons if reason["confidence"] > verify_threshold]

                    if verify_reasons:
                        if verify_flags[i] is None or verify_flags[i] is False:
                            verify_flags[i] = {"reasons": verify_reasons}  # Mark as verify with reasons
                        else:
                            verify_flags[i]["reasons"].extend(verify_reasons)
                        
        
        return duplicate_flags, verify_flags
    except Exception as e:
        print(f"Error detecting duplicates: {e}")
        return [], []

# Example Usage
with open("../json/DuplicateRules.json", "r") as f:
    config = json.load(f)

# Step 5: Main Function
def duplicate(email_bodies_src,email_subjects_src,metadata_src,attachments_src):
    # Folder path where email files are stored
    folder_path = "../../data/processed"
    try:
        # Load emails and metadata
        email_bodies_des, email_subjects_des, metadata_des, attachments_des = [], [], [], []
        for filename in os.listdir(folder_path):
            bodies, subjects, meta, attach = extract_eml_content(filename, folder_path)
            if bodies is not None:
                email_bodies_des.extend(bodies)
                email_subjects_des.extend(subjects)
                metadata_des.extend(meta)
                attachments_des.extend(attach)
        
        # Initialize SentenceTransformer model
        model = initialize_model()
        if model is None:
            raise ValueError("Model initialization failed")

        # Generate embeddings for email bodies and attachments
        source_embeddings = generate_embeddings(email_bodies_src, attachments_src, model)
        dest_embeddings = generate_embeddings(email_bodies_des, attachments_des, model)

        if not source_embeddings.any() or not dest_embeddings.any():
            raise ValueError("Embedding generation failed")

        # Detect duplicates using combined rules
        duplicate_flags, verify_flags = detect_duplicates_with_config(email_bodies_src,email_subjects_src,metadata_src,source_embeddings,   email_bodies_des, email_subjects_des, metadata_des,dest_embeddings, threshold=0.85, verify_threshold=0.5, config=config)
        
        # Prepare data for Excel output
        data = []
        for i, (email_body, flag, verify_flag) in enumerate(zip(email_bodies_src, duplicate_flags, verify_flags)):
            if flag:            
                reasons = "; ".join([f"Duplicate Found in :{reason.get('reason', 'N/A')} for Processed email ({reason['subject']}) with Confidence score: {reason.get('confidence', 0):.2f}" for reason in flag["reasons"]])
            else:
                reasons = False
            if verify_flag:
                verify_reasons = "; ".join([f"Verify the {reason['reason']} for processed email ({reason['subject']}) with Confidence score: {reason['confidence']:.2f} for creation of service request" for reason in verify_flag["reasons"]])
            else:
                verify_reasons = False
            data.append({               
                "Subject": email_subjects_src[i],
                #"Duplicate":flag,                 
                "Duplicate_Resons": reasons,
                #"Verify":verify_flag,    
                "Verify_Reasons": verify_reasons
            })
        return data
    except Exception as e:
        print(f"Error in duplicate function: {e}")
        return []
    