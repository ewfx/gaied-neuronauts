import os
import json
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from prompts import classification_prompt
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
load_dotenv()

def classify_email(email_data):
    try:
        
        results= []

        with open("../json/request_types.json", "r") as file:
            request_types = json.load(file)  # 'data' now holds the contents of the JSON file as a Python dictionary or list
        
        with open('../json/ClassificationRules.json', 'r') as file:
            data = json.load(file)
            

        # Combine instructions into a single prompt
        rules = "\n".join(data["Rules"])
        

        groq_api_key= os.getenv("GROQ_API_KEY")
        LLM = ChatGroq(groq_api_key=groq_api_key, model_name="Llama3-70b-8192",temperature=0)
        prompt = classification_prompt
        email_category_generator = prompt | LLM | StrOutputParser()
        result = email_category_generator.invoke({"initial_email": email_data, "request_types":request_types, "rules":rules})

        json_start = result.find("[")  # Position of '['
        json_end = result.rfind("]")   # Position of ']'

        # Extract JSON content between the brackets
        if json_start != -1 and json_end != -1:
            json_array = result[json_start:json_end+1]  # Slice the JSON array content
           
            # Parse the extracted JSON and append it to results
            parsed_json = json.loads(json_array)
            results.extend(parsed_json) 

            
            for item in results:
                item["Review"] = ""
                request_type = item.get("Request_Type")
                sub_request_type = item.get("SubRequest_Type")
                
                # Verify if request type and sub-request type exist in the JSON structure
                if request_type not in request_types or sub_request_type not in request_types.get(request_type, []):                
                    item["Review"] = f"Please review. The Sub-Request Type '{sub_request_type}' or Request Type '{request_type}' does not exist in the provided Request Types."
                else:
                    item["Review"] = ""

        return results
    
    except Exception as e:
        print(f"Error while classifying emails from path: {e}")
        return None