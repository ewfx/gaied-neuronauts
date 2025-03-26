
import json
from pathlib import Path
from transformers import AutoModel
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain.prompts import PromptTemplate
from prompts import dataextraction_prompt
import os



groq_api_key= os.getenv("GROQ_API_KEY")
llm = ChatGroq(groq_api_key=groq_api_key, model_name="Llama3-70b-8192", temperature=0)

# Function to query the LLM for field extraction
def extract_fields_with_llm(full_text, input_fields):
    # Create a prompt template for the LLM
    fields_str = ", ".join(input_fields)
    prompt = dataextraction_prompt
    
    # Query the LLM
    email_category_generator = prompt | llm | StrOutputParser()
    response = email_category_generator.invoke({"fields_str": fields_str, "full_text":full_text})
    #response = llm.invoke(prompt_template)
    try:
        # Parse the response as JSON
        extracted_fields = json.loads(response)
    except json.JSONDecodeError:
        extracted_fields = { }
    
    return extracted_fields

# Function to query documents and extract required fields
def query_documents(input_json_path, document_path,classificationObject):
    # Load the input JSON file
    with open(input_json_path, "r") as f:
        metadata = json.load(f)
    
    # Retrieve fields based on type and subtype
    fields_mapping = metadata.get("fields_mapping", {})
    
    # Extracting Request Type and Sub-Request Type
    extracted_data = [(item["Request_Type"], item["SubRequest_Type"]) for item in classificationObject]
    
    combinedfields = []
    # Displaying the extracted data
    for request_type, sub_request_type in extracted_data:
        
        input_fields = fields_mapping.get(request_type, {}).get(sub_request_type, [])
        

        if request_type == "off_topic" and not sub_request_type:
            input_fields = []
        elif not input_fields:
            input_fields = []
        
        # Load the document and extract its content        
        full_text = document_path
        # Extract field values using the LLM
        extracted_fields = extract_fields_with_llm(full_text, input_fields)
    
        # Create the output JSON structure
        output_data= {
            "request_type": request_type,            
            "extracted_data": extracted_fields
        }
        combinedfields.append(output_data)
    return combinedfields
    
 