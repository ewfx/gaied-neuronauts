import unittest
from unittest.mock import patch, MagicMock, mock_open
from duplicate import (
    load_emails,
    extract_eml_content,
    process_email,
    generate_embeddings,
    detect_duplicates_with_config,
    duplicate
)


class TestDuplicate(unittest.TestCase):

    @patch('code.src.duplicate.os.listdir')
    @patch('code.src.duplicate.extract_eml_content')
    @patch('code.src.duplicate.classify_email')
    @patch('code.src.duplicate.query_documents')
    @patch('code.src.duplicate.duplicate')
    def test_load_emails(self, mock_duplicate, mock_query_documents, mock_classify_email, mock_extract_eml_content, mock_listdir):
        mock_listdir.return_value = ['test1.eml', 'test2.eml']
        mock_extract_eml_content.return_value = (
            ["Email body 1"], ["Subject 1"], [{"sender": "test@example.com", "recipient": "recipient@example.com", "date": "2025-03-26"}], ["Attachment 1"]
        )
        mock_classify_email.return_value = {"Request_Type": "Test Request", "SubRequest_Type": "Test SubRequest"}
        mock_query_documents.return_value = [{"field_1": "value_1"}]
        mock_duplicate.return_value = [{"Duplicate_Resons": "None", "Verify_Reasons": "None"}]

        result = load_emails("./test_folder")
        self.assertEqual(len(result), 2)
        self.assertEqual(result[0]["classification"]["Request_Type"], "Test Request")
        self.assertEqual(result[0]["fields"][0]["field_1"], "value_1")
        self.assertEqual(result[0]["duplicates"][0]["Duplicate_Resons"], "None")

    @patch('code.src.duplicate.email.message_from_string')
    @patch('builtins.open', new_callable=mock_open, read_data="Test email content")
    def test_extract_eml_content(self, mock_open, mock_message_from_string):
        mock_msg = MagicMock()
        mock_msg.is_multipart.return_value = False
        mock_msg.get_content.return_value = "Test email body"
        mock_msg.__getitem__.side_effect = lambda key: {
            'Subject': 'Test Subject',
            'From': 'test@example.com',
            'To': 'recipient@example.com',
            'Date': 'Wed, 26 Mar 2025 10:00:00 +0000'
        }[key]
        mock_message_from_string.return_value = mock_msg

        email_bodies, email_subjects, metadata, attachments = extract_eml_content("test.eml", "./test_folder")
        self.assertEqual(len(email_bodies), 1)
        self.assertEqual(email_bodies[0], "Test email body")
        self.assertEqual(email_subjects[0], "Test Subject")
        self.assertEqual(metadata[0]["sender"], "test@example.com")

    def test_process_email(self):
        mock_msg = MagicMock()
        mock_msg.is_multipart.return_value = False
        mock_msg.get_content.return_value = "Test email body"

        email_body, email_attachments = process_email(mock_msg)
        self.assertEqual(email_body, "Test email body")
        self.assertEqual(email_attachments, [])

    @patch('code.src.duplicate.SentenceTransformer')
    def test_generate_embeddings(self, mock_sentence_transformer):
        mock_model = MagicMock()
        mock_sentence_transformer.return_value = mock_model
        mock_model.encode.return_value = [[0.1, 0.2, 0.3]]

        email_bodies = ["Test email body"]
        attachments = [[]]
        embeddings = generate_embeddings(email_bodies, attachments, mock_model)
        self.assertEqual(len(embeddings), 1)
        self.assertEqual(embeddings[0], [0.1, 0.2, 0.3])

    @patch('code.src.duplicate.cosine_similarity')
    def test_detect_duplicates_with_config(self, mock_cosine_similarity):
        mock_cosine_similarity.return_value = [[0.9]]
        email_bodies_src = ["Test email body"]
        email_subjects_src = ["Test Subject"]
        metadata_src = [{"sender": "test@example.com", "recipient": "recipient@example.com", "date": "2025-03-26"}]
        source_embeddings = [[0.1, 0.2, 0.3]]
        email_bodies_des = ["Processed email body"]
        email_subjects_des = ["Processed Subject"]
        metadata_des = [{"sender": "processed@example.com", "recipient": "recipient@example.com", "date": "2025-03-26"}]
        dest_embeddings = [[0.4, 0.5, 0.6]]
        config = {
            "check_subject": True,
            "check_sender": True,
            "check_recipient": False,
            "check_date": False,
            "check_content": True
        }

        duplicate_flags, verify_flags = detect_duplicates_with_config(
            email_bodies_src, email_subjects_src, metadata_src, source_embeddings,
            email_bodies_des, email_subjects_des, metadata_des, dest_embeddings,
            threshold=0.85, verify_threshold=0.5, config=config
        )
        self.assertEqual(len(duplicate_flags), 1)
        self.assertEqual(len(verify_flags), 1)
        self.assertTrue(duplicate_flags[0])
        self.assertIsNone(verify_flags[0])

    @patch('code.src.duplicate.load_emails')
    @patch('code.src.duplicate.initialize_model')
    @patch('code.src.duplicate.generate_embeddings')
    @patch('code.src.duplicate.detect_duplicates_with_config')
    def test_duplicate(self, mock_detect_duplicates_with_config, mock_generate_embeddings, mock_initialize_model, mock_load_emails):
        mock_load_emails.return_value = (["Test email body"], ["Test Subject"], [{"sender": "test@example.com", "recipient": "recipient@example.com", "date": "2025-03-26"}], [[]])
        mock_initialize_model.return_value = MagicMock()
        mock_generate_embeddings.return_value = [[0.1, 0.2, 0.3]]
        mock_detect_duplicates_with_config.return_value = ([{"reasons": [{"reason": "content", "confidence": 0.9, "duplicate_email_id": 1, "duplicate_email": "test@example.com"}]}], [None])

        email_bodies_src = ["Test email body"]
        email_subjects_src = ["Test Subject"]
        metadata_src = [{"sender": "test@example.com", "recipient": "recipient@example.com", "date": "2025-03-26"}]
        attachments_src = [[]]

        result = duplicate(email_bodies_src, email_subjects_src, metadata_src, attachments_src)
        self.assertEqual(len(result), 1)
        self.assertIn("Duplicate_Resons", result[0])
        self.assertIn("Verify_Reasons", result[0])


if __name__ == '__main__':
    unittest.main()