import React, { useState } from 'react';
import Papa from 'papaparse';

const CSVPage = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [resultFile, setResultFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
  };

  const handleUpload = async () => {
    if (!csvFile) return;

    Papa.parse(csvFile, {
      complete: (result) => {
        const jsonData = result.data;
        sendJsonToServer(jsonData);
      },
      header: true, // Assuming CSV has a header row
    });
  };

  const sendJsonToServer = async (jsonData) => {
    try {
      const response = await fetch('http://localhost:3001/v1/sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: jsonData }),
      });

      if (response.ok) {
        const result = await response.json();
        setResultFile(result);
      } else {
        console.error('Error sending JSON data to server');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>CSV Uploader</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
      
      {resultFile && (
        <div>
          <h2>Result</h2>
          <p>Download the result file:</p>
          <a href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(resultFile))}`} download="result.json">
            Download Result JSON
          </a>
        </div>
      )}
    </div>
  );
};

export default CSVPage;