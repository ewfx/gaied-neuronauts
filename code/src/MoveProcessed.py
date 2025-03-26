import os
import shutil

# Define the source and destination directories

processed_dir = "../../data/processed"



def move_processed_emails(inbox_dir, processed_dir):
    """Move processed emails from the inbox directory to the processed directory."""
    # Ensure the destination directory exists
    os.makedirs(processed_dir, exist_ok=True)

    # Iterate over all files in the inbox directory
    for filename in os.listdir(inbox_dir):
        source_file = os.path.join(inbox_dir, filename)
        destination_file = os.path.join(processed_dir, filename)

        # Move the file to the processed directory
        shutil.move(source_file, destination_file)
        print(f'Moved: {source_file} -> {destination_file}')

    print('All files have been moved.')