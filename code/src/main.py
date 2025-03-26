import os
import json
import uvicorn
import pandas as pd
from classification import classify_email
from duplicate import load_emails
from fastapi import FastAPI, UploadFile, File, Query
from pydantic import BaseModel
from typing import List, Dict, Any
from MoveProcessed import move_processed_emails

app = FastAPI()

class EmailProcessingResponse(BaseModel):
    finaloutput: List[Dict[str, Any]]

@app.get("/process-emails/", response_model=EmailProcessingResponse)
async def process_emails_endpoint(email_dir_path: str = Query(...)):
    email_dir_path = os.path.join("../../data/", email_dir_path)    
    print(f"Processing emails in {email_dir_path}")
    finaloutput=load_emails(email_dir_path)    
    #move_processed_emails(email_dir_path, "../../data/processed")
    return EmailProcessingResponse(finaloutput=finaloutput)
    
    
# Entry point of the script
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
    



