**Gen AI Gatekeeper**
**Introduction**
The Gen AI Gatekeeper is an intelligent email monitoring and processing solution designed to streamline the management of incoming emails in a shared mailbox. Leveraging advanced generative AI capabilities and seamless orchestration, it categorizes, extracts key information, and provides actionable insights from emails based on the request types that can be channeled to various Service Requests.

**Demo**
A live demo of the Gen AI Gatekeeper will be available soon. Stay tuned for a showcase of how it processes sample emails, categorizes them, extracts data, and generates analytics.

**Inspiration**
Shared mailboxes are often inundated with emails from various senders, making it challenging for teams to prioritize and process requests efficiently. Manual sorting and data extraction are time-consuming and prone to errors. Inspired by the power of generative AI and efficient orchestration, we aimed to create a smart gatekeeper that automates email triaging, reduces human effort, and enhances decision-making with data-driven insights.

**What It Does**
The Gen AI Gatekeeper monitors the backed up emails (.eml fomat) from a shared mailbox and processes incoming emails in a batch by:

Email Categorization: Extracts and interprets email content and attachments to categorize emails into predefined "Request Type" (e.g., Adjustment, AUTransfer) and "Sub Request Type" (e.g., RateAdjustment, ParticipantManagement) based on sender intent, with reasoning provided and a confidence score.
Content-Based Data Extraction: Identifies and extracts key attributes (e.g., Borrower Name, amount, expiration date) from email bodies and attachments for use in service requests.
Primary Intent Detection: Determines the sender’s primary intent, even in emails discussing multiple topics.
Duplicate Detection: Identifies and flags duplicate emails to prevent redundant processing.
Analytics & Insights: Provides data on email volumes, request type distribution, and other actionable insights.

**How We Built It**
We developed the Gen AI Gatekeeper by integrating an Email Service API with a generative AI model and robust orchestration:

**Email Ingestion:** Connected to a shared mailbox using an Email Service API to fetch incoming emails.
**AI Processing:** Employed a fine-tuned generative AI model (e.g., based on xAI’s Grok or similar) to analyze email content and attachments, categorize requests, and extract data.
**Rule Engine:** Built a configurable ruleset for mapping sender intent to request types and extracting specific fields.
**Orchestration:** Designed a workflow to seamlessly coordinate email ingestion, AI processing, and data storage.
**Analytics Module:** Added a dashboard to visualize email trends and statistics.
**Testing:** Validated the solution with diverse email datasets to ensure accuracy in intent detection and data extraction.

**Challenges We Faced**
Intent Ambiguity: Handling emails with vague or mixed intents required iterative model training and robust reasoning logic.
Attachment Variability: Processing diverse attachment formats (PDFs, Word docs, images) demanded advanced parsing capabilities.
Scalability: Ensuring the system could handle high email volumes without latency was a key concern in our orchestration design.
Duplicate Detection: Accurately identifying duplicates across slight variations in email content was complex.
Configurability: Balancing flexibility (custom fields/rules) with ease of use took careful design.

**How to Run**
Prerequisites:
Python 3.8+
Access to .eml mail from a shared mailbox (e.g., Office 365, Gmail)
API credentials for the Email Service
Setup:
bash

Collapse

Wrap

Copy
git clone https://github.com/your-team/gen-ai-gatekeeper.git
cd gen-ai-gatekeeper
pip install -r requirements.txt
Configuration:
Update config.yaml with:
Email Service API credentials
Shared mailbox address
Predefined request types and fields to extract
Run the Application:
bash

Collapse

Wrap

Copy
python main.py
Access Analytics:
Open the dashboard at http://localhost:5000/analytics (or configured port).
Tech Stack
Backend: Python, Flask
AI Model: Generative AI (e.g., Grok by xAI or equivalent)
Email Integration: Email Service API (e.g., Microsoft Graph API, Gmail API)
Data Processing: spaCy, PyPDF2, Tesseract (for OCR)
Database: SQLite (for email metadata and analytics)
Frontend: HTML/CSS, Chart.js (for analytics dashboard)
Orchestration: Custom workflow using Python
Deployment: Docker (optional)
Team
Blessy Mathew: AI/ML Engineer – Led model training and intent detection logic.
Cini Varghese: Backend Developer – Built the Email Service API integration and orchestration workflow.
Gayathri Aravind: Frontend Developer – Created the user-friendly analytics interface.
Purushotham Reddy: Data Scientist – Designed the analytics module and insights dashboard.
Seena Jose: Project Manager – Coordinated the team and ensured timely delivery.
