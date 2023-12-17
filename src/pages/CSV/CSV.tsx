import React, { useState, ChangeEvent } from 'react';
import Papa, { ParseResult } from 'papaparse';

interface ResultFile {
  message: string;
  functional_sentiment: {
    positive: number;
    neutral: number;
    negative: number;
    speech: number;
    skip: number;
  };
  emotional_sentiment: string;
  detected_language: string;
}

const CSVPage: React.FC = () => {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [resultFile, setResultFile] = useState<ResultFile[] | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setCsvFile(file || null);
  };

  const handleUpload = async () => {
    if (!csvFile) return;

    Papa.parse(csvFile, {
      complete: (result: ParseResult<any>) => {
        const jsonData = result.data.map((row: string[]) => row[0]); // Assuming the text is in the first column
        sendJsonToServer(jsonData);
      },
      delimiter: ';', // Set the delimiter to semicolon
      header: false, // No header row
    });
  };

  const sendJsonToServer = async (jsonData: any) => {
    try {
      const response = await fetch('http://api.mechty.fun/v1/sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: jsonData }),
      });

      if (response.ok) {
        const result: ResultFile[] = await response.json();
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
