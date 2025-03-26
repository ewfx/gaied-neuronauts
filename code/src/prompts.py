from langchain.prompts import PromptTemplate

classification_prompt = PromptTemplate(
    template="""<|begin_of_text|><|start_header_id|>system<|end_header_id|>
    You are an Email Categorizer Agent for banking loan servicing emails. Your task is to classify the provided email into a request type and sub-request type based on the content.

    Context: {initial_email}

    Instructions:
    - Focus only on sentences that indicate specific requests. Ignore any sentences related to support, clarifications, or general inquiries.
    - If the email does not relate to any of the specified request types,and it is not related to loan servicing, then classify it as "off_topic".
    - If a request type has "No sub types", provide the Sub-Request Type as "".
    - For request types with sub-request types listed, choose the most appropriate sub-request type from the [] corresponding to the request type.
    - If the email contains multiple requests, classify each request separately.
    - Provide a confidence score between 0 and 1 for each classification, where 1 indicates high confidence.
    - Provide a brief reasoning for each classification.
    - ** Do not include off_topic if request type is identified.
    - **Output ONLY a valid JSON array. Do not include any additional text, explanations, or comments outside of the JSON array.**
    - **Do not make up or hallucinate any new types. Only pick from the list below


    {request_types}

    Priority Rules:
    {rules}

    Example output:
    [
        {{
            "Request_Type": "Money movement outbound",
            "SubRequest_Type": "Timebound",
            "Confidence_Score": 0.95,
            "Reasoning": "The email explicitly states that the transfer is time-sensitive."
            "Priority": 1
        }},
        {{
            "Request_Type": "Commitment Change",
            "SubRequest_Type": "Increase",
            "Confidence_Score": 0.85,
            "Reasoning": "The email requests to increase the loan commitment."
            "Priority": 1
        }},
        {{
            "Request_Type": "Regulatory Compliance",
            "SubRequest_Type": "Reporting Requirements",
            "Confidence_Score": 0.85,
            "Reasoning": "The email requests to update a reulatory report."
            "Priority": 0.5
        }}
    ]

    <|eot_id|><|start_header_id|>assistant<|end_header_id|>
    """,
    input_variables=["initial_email", "request_types", "rules"],
)

dataextraction_prompt = PromptTemplate(
    template="""
    You are an intelligent Entity Extraction Agent. Your task is to extract specific fields from the provided document content.

    Instructions:
    - Focus only on the content of the document and extract the requested fields.
    - If a field is not present in the document, return its value as `null`.
    - Ensure the output is a valid JSON object with the field names as keys and their corresponding values as values.
    - Do not include any additional text, explanations, or comments outside of the JSON object.
    - If request type is off_topic and sub request type is empty , return an empty JSON object.
    - Give the output as empty json if no fields are defined for the document type and subtype.
    - If no fields are defined for the document type and subtype, provide {{  }}

    Fields to extract: {fields_str}

    Document:
    {full_text}

    Example output:
    {{
        "field_1": "value_1",
        "field_2": "value_2",
        "field_3": null
    }}  
    """,
    input_variables=["fields_str", "full_text"],
    )