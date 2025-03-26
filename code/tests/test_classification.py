import unittest
from unittest.mock import patch, mock_open, MagicMock
from classification import classify_email


class TestClassification(unittest.TestCase):

    @patch("code.src.classification.json.load")
    @patch("code.src.classification.open", new_callable=mock_open)
    @patch("code.src.classification.ChatGroq")
    @patch("code.src.classification.os.getenv")
    def test_classify_email_success(self, mock_getenv, mock_chatgroq, mock_open, mock_json_load):
        # Mock environment variable
        mock_getenv.return_value = "mock_groq_api_key"

        # Mock request_types.json and ClassificationRules.json
        mock_json_load.side_effect = [
            {"RequestType1": ["SubType1", "SubType2"]},  # Mock request_types.json
            {"Rules": ["Rule 1", "Rule 2"]}             # Mock ClassificationRules.json
        ]

        # Mock LLM response
        mock_llm = MagicMock()
        mock_chatgroq.return_value = mock_llm
        mock_llm.invoke.return_value = '[{"Request_Type": "RequestType1", "SubRequest_Type": "SubType1"}]'

        # Input email data
        email_data = "This is a test email."

        # Call the function
        result = classify_email(email_data)

        # Assertions
        self.assertIsNotNone(result)
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]["Request_Type"], "RequestType1")
        self.assertEqual(result[0]["SubRequest_Type"], "SubType1")
        self.assertEqual(result[0]["Review"], "")

        # Verify calls
        mock_getenv.assert_called_once_with("GROQ_API_KEY")
        mock_open.assert_any_call("../json/request_types.json", "r")
        mock_open.assert_any_call("../json/ClassificationRules.json", "r")
        mock_llm.invoke.assert_called_once()

    @patch("code.src.classification.json.load")
    @patch("code.src.classification.open", new_callable=mock_open)
    @patch("code.src.classification.ChatGroq")
    @patch("code.src.classification.os.getenv")
    def test_classify_email_invalid_request_type(self, mock_getenv, mock_chatgroq, mock_open, mock_json_load):
        # Mock environment variable
        mock_getenv.return_value = "mock_groq_api_key"

        # Mock request_types.json and ClassificationRules.json
        mock_json_load.side_effect = [
            {"RequestType1": ["SubType1", "SubType2"]},  # Mock request_types.json
            {"Rules": ["Rule 1", "Rule 2"]}             # Mock ClassificationRules.json
        ]

        # Mock LLM response
        mock_llm = MagicMock()
        mock_chatgroq.return_value = mock_llm
        mock_llm.invoke.return_value = '[{"Request_Type": "InvalidType", "SubRequest_Type": "InvalidSubType"}]'

        # Input email data
        email_data = "This is a test email."

        # Call the function
        result = classify_email(email_data)

        # Assertions
        self.assertIsNotNone(result)
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]["Request_Type"], "InvalidType")
        self.assertEqual(result[0]["SubRequest_Type"], "InvalidSubType")
        self.assertIn("Please review", result[0]["Review"])

    @patch("code.src.classification.json.load")
    @patch("code.src.classification.open", new_callable=mock_open)
    @patch("code.src.classification.ChatGroq")
    @patch("code.src.classification.os.getenv")
    def test_classify_email_json_parsing_error(self, mock_getenv, mock_chatgroq, mock_open, mock_json_load):
        # Mock environment variable
        mock_getenv.return_value = "mock_groq_api_key"

        # Mock request_types.json and ClassificationRules.json
        mock_json_load.side_effect = [
            {"RequestType1": ["SubType1", "SubType2"]},  # Mock request_types.json
            {"Rules": ["Rule 1", "Rule 2"]}             # Mock ClassificationRules.json
        ]

        # Mock LLM response with invalid JSON
        mock_llm = MagicMock()
        mock_chatgroq.return_value = mock_llm
        mock_llm.invoke.return_value = 'Invalid JSON Response'

        # Input email data
        email_data = "This is a test email."

        # Call the function
        result = classify_email(email_data)

        # Assertions
        self.assertIsNone(result)

    @patch("code.src.classification.json.load")
    @patch("code.src.classification.open", new_callable=mock_open)
    @patch("code.src.classification.ChatGroq")
    @patch("code.src.classification.os.getenv")
    def test_classify_email_exception_handling(self, mock_getenv, mock_chatgroq, mock_open, mock_json_load):
        # Mock environment variable
        mock_getenv.return_value = "mock_groq_api_key"

        # Mock request_types.json and ClassificationRules.json
        mock_json_load.side_effect = [
            {"RequestType1": ["SubType1", "SubType2"]},  # Mock request_types.json
            {"Rules": ["Rule 1", "Rule 2"]}             # Mock ClassificationRules.json
        ]

        # Mock LLM to raise an exception
        mock_llm = MagicMock()
        mock_chatgroq.return_value = mock_llm
        mock_llm.invoke.side_effect = Exception("LLM error")

        # Input email data
        email_data = "This is a test email."

        # Call the function
        result = classify_email(email_data)

        # Assertions
        self.assertIsNone(result)


if __name__ == "__main__":
    unittest.main()