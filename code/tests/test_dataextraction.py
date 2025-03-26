import unittest
from unittest.mock import patch, MagicMock, mock_open
from dataextraction import extract_fields_with_llm, query_documents


class TestDataExtraction(unittest.TestCase):

    @patch("code.src.dataextraction.ChatGroq")
    @patch("code.src.dataextraction.dataextraction_prompt")
    def test_extract_fields_with_llm(self, mock_prompt, mock_chatgroq):
        # Mock the LLM response
        mock_llm = MagicMock()
        mock_chatgroq.return_value = mock_llm
        mock_llm.invoke.return_value = '{"field_1": "value_1", "field_2": "value_2"}'

        # Mock the prompt
        mock_prompt | mock_llm | MagicMock()
        mock_prompt.invoke.return_value = '{"field_1": "value_1", "field_2": "value_2"}'

        # Test the function
        full_text = "This is a test document."
        input_fields = ["field_1", "field_2"]
        result = extract_fields_with_llm(full_text, input_fields)

        # Assertions
        self.assertEqual(result, {"field_1": "value_1", "field_2": "value_2"})
        mock_llm.invoke.assert_called_once()

    @patch("code.src.dataextraction.extract_fields_with_llm")
    @patch("builtins.open", new_callable=mock_open, read_data='{"fields_mapping": {"RequestType1": {"SubType1": ["field_1", "field_2"]}}}')
    def test_query_documents(self, mock_open, mock_extract_fields_with_llm):
        # Mock the LLM field extraction
        mock_extract_fields_with_llm.return_value = {"field_1": "value_1", "field_2": "value_2"}

        # Input data
        input_json_path = "test_metadata.json"
        document_path = "test_document.txt"
        classification_object = [{"Request_Type": "RequestType1", "SubRequest_Type": "SubType1"}]

        # Test the function
        result = query_documents(input_json_path, document_path, classification_object)

        # Assertions
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]["request_type"], "RequestType1")
        self.assertEqual(result[0]["extracted_data"], {"field_1": "value_1", "field_2": "value_2"})

        # Verify file open and LLM extraction calls
        mock_open.assert_called_once_with(input_json_path, "r")
        mock_extract_fields_with_llm.assert_called_once_with(document_path, ["field_1", "field_2"])

    @patch("code.src.dataextraction.extract_fields_with_llm")
    @patch("builtins.open", new_callable=mock_open, read_data='{"fields_mapping": {"off_topic": {}}}')
    def test_query_documents_off_topic(self, mock_open, mock_extract_fields_with_llm):
        # Mock the LLM field extraction
        mock_extract_fields_with_llm.return_value = {}

        # Input data
        input_json_path = "test_metadata.json"
        document_path = "test_document.txt"
        classification_object = [{"Request_Type": "off_topic", "SubRequest_Type": ""}]

        # Test the function
        result = query_documents(input_json_path, document_path, classification_object)

        # Assertions
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]["request_type"], "off_topic")
        self.assertEqual(result[0]["extracted_data"], {})

        # Verify file open and LLM extraction calls
        mock_open.assert_called_once_with(input_json_path, "r")
        mock_extract_fields_with_llm.assert_called_once_with(document_path, [])

    @patch("code.src.dataextraction.extract_fields_with_llm")
    @patch("builtins.open", new_callable=mock_open, read_data='{"fields_mapping": {"RequestType1": {"SubType1": []}}}')
    def test_query_documents_no_fields_defined(self, mock_open, mock_extract_fields_with_llm):
        # Mock the LLM field extraction
        mock_extract_fields_with_llm.return_value = {}

        # Input data
        input_json_path = "test_metadata.json"
        document_path = "test_document.txt"
        classification_object = [{"Request_Type": "RequestType1", "SubRequest_Type": "SubType1"}]

        # Test the function
        result = query_documents(input_json_path, document_path, classification_object)

        # Assertions
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]["request_type"], "RequestType1")
        self.assertEqual(result[0]["extracted_data"], {})

        # Verify file open and LLM extraction calls
        mock_open.assert_called_once_with(input_json_path, "r")
        mock_extract_fields_with_llm.assert_called_once_with(document_path, [])


if __name__ == "__main__":
    unittest.main()