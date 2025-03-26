import unittest
from unittest.mock import patch, MagicMock
from MoveProcessed import move_processed_emails


class TestMoveProcessedEmails(unittest.TestCase):

    @patch("code.src.MoveProcessed.shutil.move")
    @patch("code.src.MoveProcessed.os.listdir")
    @patch("code.src.MoveProcessed.os.makedirs")
    def test_move_processed_emails(self, mock_makedirs, mock_listdir, mock_move):
        # Mock the list of files in the inbox directory
        mock_listdir.return_value = ["email1.eml", "email2.eml"]

        # Call the function
        inbox_dir = "./test_inbox"
        processed_dir = "./test_processed"
        move_processed_emails(inbox_dir, processed_dir)

        # Assertions
        mock_makedirs.assert_called_once_with(processed_dir, exist_ok=True)
        mock_listdir.assert_called_once_with(inbox_dir)
        self.assertEqual(mock_move.call_count, 2)
        mock_move.assert_any_call("./test_inbox/email1.eml", "./test_processed/email1.eml")
        mock_move.assert_any_call("./test_inbox/email2.eml", "./test_processed/email2.eml")

    @patch("code.src.MoveProcessed.shutil.move")
    @patch("code.src.MoveProcessed.os.listdir")
    @patch("code.src.MoveProcessed.os.makedirs")
    def test_move_processed_emails_empty_inbox(self, mock_makedirs, mock_listdir, mock_move):
        # Mock an empty inbox directory
        mock_listdir.return_value = []

        # Call the function
        inbox_dir = "./test_inbox"
        processed_dir = "./test_processed"
        move_processed_emails(inbox_dir, processed_dir)

        # Assertions
        mock_makedirs.assert_called_once_with(processed_dir, exist_ok=True)
        mock_listdir.assert_called_once_with(inbox_dir)
        mock_move.assert_not_called()

    @patch("code.src.MoveProcessed.shutil.move")
    @patch("code.src.MoveProcessed.os.listdir")
    @patch("code.src.MoveProcessed.os.makedirs")
    def test_move_processed_emails_exception_handling(self, mock_makedirs, mock_listdir, mock_move):
        # Mock the list of files in the inbox directory
        mock_listdir.return_value = ["email1.eml", "email2.eml"]

        # Simulate an exception during file move
        mock_move.side_effect = Exception("Error moving file")

        # Call the function
        inbox_dir = "./test_inbox"
        processed_dir = "./test_processed"
        with self.assertRaises(Exception):
            move_processed_emails(inbox_dir, processed_dir)

        # Assertions
        mock_makedirs.assert_called_once_with(processed_dir, exist_ok=True)
        mock_listdir.assert_called_once_with(inbox_dir)
        self.assertEqual(mock_move.call_count, 1)  # Stops after the first error


if __name__ == "__main__":
    unittest.main()