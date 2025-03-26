"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return setMessage("Please select a file.");
    
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setMessage(result.message);
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Email Dataset (CSV)</h2>
      
      <div className="border border-dashed border-gray-400 rounded-lg p-6 text-center">
        <input type="file" accept=".csv" onChange={handleFileChange} className="hidden" id="fileInput" />
        <label
          htmlFor="fileInput"
          className="cursor-pointer text-blue-600 hover:text-blue-800 transition font-medium"
        >
          {file ? file.name : "Click to select a CSV file"}
        </label>
      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
      >
        {loading ? "Uploading..." : "Upload File"}
      </button>

      {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
    </div>
  );
}
