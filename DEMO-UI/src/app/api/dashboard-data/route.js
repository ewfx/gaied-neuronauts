import { NextResponse } from "next/server";

export async function GET() {
  const fakeData = {
    "finaloutput": [
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Decrease Commitment",
                    "Confidence Score": 0.72,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.72"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Loan Modification",
                    "SubRequest_Type": "Term Adjustment",
                    "Confidence Score": 0.92,
                    "Reasoning": "Automated classification determined based on email content related to Loan Modification.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Loan Modification",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Loan Modification with confidence 0.92"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Close Account",
                    "Confidence Score": 0.8,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.8"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Loan Modification",
                    "SubRequest_Type": "Principal Adjustment",
                    "Confidence Score": 0.63,
                    "Reasoning": "Automated classification determined based on email content related to Loan Modification.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Loan Modification",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Loan Modification with confidence 0.63"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Covenant Change",
                    "Confidence Score": 0.67,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.67"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Payment Method",
                    "Confidence Score": 0.92,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.92"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Covenant Change",
                    "Confidence Score": 0.77,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.77"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Close Account",
                    "Confidence Score": 0.86,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": "Failed to parse LLM response as JSON"
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.86"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "Recurring",
                    "Confidence Score": 0.96,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.96"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "One-time",
                    "Confidence Score": 0.77,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": "Failed to parse LLM response as JSON"
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.77"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "Timebound",
                    "Confidence Score": 0.69,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": "Failed to parse LLM response as JSON"
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.69"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Contact Info",
                    "Confidence Score": 0.68,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.68"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Payment Method",
                    "Confidence Score": 0.69,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": "Failed to parse LLM response as JSON"
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.69"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Loan Modification",
                    "SubRequest_Type": "Term Adjustment",
                    "Confidence Score": 0.64,
                    "Reasoning": "Automated classification determined based on email content related to Loan Modification.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Loan Modification",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Loan Modification with confidence 0.64"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement inbound",
                    "SubRequest_Type": "One-time",
                    "Confidence Score": 0.76,
                    "Reasoning": "Automated classification determined based on email content related to Money movement inbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement inbound",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement inbound with confidence 0.76"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Decrease Commitment",
                    "Confidence Score": 0.81,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.81"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "One-time",
                    "Confidence Score": 0.96,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.96"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Payment Method",
                    "Confidence Score": 0.69,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.69"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Covenant Change",
                    "Confidence Score": 0.81,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.81"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Contact Info",
                    "Confidence Score": 0.78,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.78"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Contact Info",
                    "Confidence Score": 0.99,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": "Failed to parse LLM response as JSON"
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.99"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement inbound",
                    "SubRequest_Type": "Recurring",
                    "Confidence Score": 0.74,
                    "Reasoning": "Automated classification determined based on email content related to Money movement inbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement inbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement inbound with confidence 0.74"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Close Account",
                    "Confidence Score": 0.87,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.87"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "One-time",
                    "Confidence Score": 0.62,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.62"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Increase Commitment",
                    "Confidence Score": 0.79,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.79"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Contact Info",
                    "Confidence Score": 0.6,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.6"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "Timebound",
                    "Confidence Score": 0.75,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.75"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "One-time",
                    "Confidence Score": 0.77,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.77"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "Recurring",
                    "Confidence Score": 0.71,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.71"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement inbound",
                    "SubRequest_Type": "One-time",
                    "Confidence Score": 0.75,
                    "Reasoning": "Automated classification determined based on email content related to Money movement inbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement inbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement inbound with confidence 0.75"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement inbound",
                    "SubRequest_Type": "Timebound",
                    "Confidence Score": 0.91,
                    "Reasoning": "Automated classification determined based on email content related to Money movement inbound.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement inbound",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement inbound with confidence 0.91"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Decrease Commitment",
                    "Confidence Score": 0.82,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.82"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement inbound",
                    "SubRequest_Type": "Timebound",
                    "Confidence Score": 0.97,
                    "Reasoning": "Automated classification determined based on email content related to Money movement inbound.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement inbound",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement inbound with confidence 0.97"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Increase Commitment",
                    "Confidence Score": 0.77,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": "Failed to parse LLM response as JSON"
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.77"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Covenant Change",
                    "Confidence Score": 0.62,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.62"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Payment Method",
                    "Confidence Score": 0.8,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.8"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Loan Modification",
                    "SubRequest_Type": "Principal Adjustment",
                    "Confidence Score": 0.61,
                    "Reasoning": "Automated classification determined based on email content related to Loan Modification.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Loan Modification",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Loan Modification with confidence 0.61"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "Recurring",
                    "Confidence Score": 0.87,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.87"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Decrease Commitment",
                    "Confidence Score": 0.89,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.89"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Loan Modification",
                    "SubRequest_Type": "Term Adjustment",
                    "Confidence Score": 0.71,
                    "Reasoning": "Automated classification determined based on email content related to Loan Modification.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Loan Modification",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Loan Modification with confidence 0.71"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Payment Method",
                    "Confidence Score": 0.97,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Verified"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": "Failed to parse LLM response as JSON"
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.97"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement outbound",
                    "SubRequest_Type": "One-time",
                    "Confidence Score": 0.64,
                    "Reasoning": "Automated classification determined based on email content related to Money movement outbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement outbound",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement outbound with confidence 0.64"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Loan Modification",
                    "SubRequest_Type": "Term Adjustment",
                    "Confidence Score": 0.82,
                    "Reasoning": "Automated classification determined based on email content related to Loan Modification.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Loan Modification",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Loan Modification with confidence 0.82"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Loan Modification",
                    "SubRequest_Type": "Interest Rate Change",
                    "Confidence Score": 0.81,
                    "Reasoning": "Automated classification determined based on email content related to Loan Modification.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Loan Modification",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Loan Modification with confidence 0.81"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Loan Modification",
                    "SubRequest_Type": "Principal Adjustment",
                    "Confidence Score": 0.76,
                    "Reasoning": "Automated classification determined based on email content related to Loan Modification.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Loan Modification",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Loan Modification with confidence 0.76"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Close Account",
                    "Confidence Score": 0.77,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.77"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Facility Change",
                    "SubRequest_Type": "Decrease Commitment",
                    "Confidence Score": 0.68,
                    "Reasoning": "Automated classification determined based on email content related to Facility Change.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Facility Change",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Facility Change with confidence 0.68"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Loan Modification",
                    "SubRequest_Type": "Term Adjustment",
                    "Confidence Score": 0.68,
                    "Reasoning": "Automated classification determined based on email content related to Loan Modification.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": "Failed to parse LLM response as JSON"
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Loan Modification",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Loan Modification with confidence 0.68"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Money movement inbound",
                    "SubRequest_Type": "Recurring",
                    "Confidence Score": 0.81,
                    "Reasoning": "Automated classification determined based on email content related to Money movement inbound.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": "Failed to parse LLM response as JSON"
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Money movement inbound",
                    "Duplicate_Resons": false,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Money movement inbound with confidence 0.81"
                }
            ]
        },
        {
            "classification": [
                {
                    "Request_Type": "Account Maintenance",
                    "SubRequest_Type": "Update Payment Method",
                    "Confidence Score": 0.81,
                    "Reasoning": "Automated classification determined based on email content related to Account Maintenance.",
                    "verify": "Please verify"
                }
            ],
            "fields": {
                "queried_fields": [
                    "Payment Amount",
                    "Payment Date",
                    "Loan/Facility ID",
                    "Borrower Name",
                    "Lender Account Information",
                    "Payment Method",
                    "Principal Balance Before Payment",
                    "Principal Balance After Payment",
                    "Payment Type",
                    "Prepayment Penalty",
                    "Prepayment Reason",
                    "Effective Date"
                ],
                "extracted_data": {
                    "error": null
                }
            },
            "duplicates": [
                {
                    "Subject": "Request regarding Account Maintenance",
                    "Duplicate_Resons": true,
                    "Verify_Reasons": "Verify sender and content for potential duplicate related to Account Maintenance with confidence 0.81"
                }
            ]
        }
    ]
}  ;

  return NextResponse.json(fakeData);
}
