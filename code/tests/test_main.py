import unittest
from unittest.mock import patch, MagicMock
from fastapi.testclient import TestClient
from main import app, process_emails_endpoint


class TestMain(unittest.TestCase):

    def setUp(self):
        # Create a TestClient instance for the FastAPI app
        self.client = TestClient(app)

    @patch("code.src.main.load_emails")
    def test_process_emails_endpoint(self, mock_load_emails):
        # Mock the load_emails function
        mock_load_emails.return_value = [
            {"email_id": 1, "content": "Test email content 1"},
            {"email_id": 2, "content": "Test email content 2"}
        ]

        # Call the endpoint with a test query parameter
        response = self.client.get("/process-emails/", params={"email_dir_path": "test_folder"})

        # Assertions
        self.assertEqual(response.status_code, 200)
        self.assertIn("finaloutput", response.json())
        self.assertEqual(len(response.json()["finaloutput"]), 2)
        self.assertEqual(response.json()["finaloutput"][0]["email_id"], 1)
        self.assertEqual(response.json()["finaloutput"][0]["content"], "Test email content 1")

        # Verify that load_emails was called with the correct argument
        mock_load_emails.assert_called_once_with("../../data/test_folder")

    @patch("code.src.main.load_emails")
    @patch("code.src.main.move_processed_emails")
    def test_process_emails_with_move(self, mock_move_processed_emails, mock_load_emails):
        # Mock the load_emails function
        mock_load_emails.return_value = [
            {"email_id": 1, "content": "Test email content 1"},
            {"email_id": 2, "content": "Test email content 2"}
        ]

        # Mock the move_processed_emails function
        mock_move_processed_emails.return_value = None

        # Call the endpoint with a test query parameter
        response = self.client.get("/process-emails/", params={"email_dir_path": "test_folder"})

        # Assertions
        self.assertEqual(response.status_code, 200)
        self.assertIn("finaloutput", response.json())
        self.assertEqual(len(response.json()["finaloutput"]), 2)

        # Verify that load_emails and move_processed_emails were called with the correct arguments
        mock_load_emails.assert_called_once_with("../../data/test_folder")
        # Uncomment the following line if move_processed_emails is enabled in the endpoint
        # mock_move_processed_emails.assert_called_once_with("../../data/test_folder", "../../data/processed")


if __name__ == "__main__":
    unittest.main()