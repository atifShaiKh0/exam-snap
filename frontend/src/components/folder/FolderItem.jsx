import React, { useState, useEffect } from "react";

// Function to convert buffer to a Blob URL
const bufferToBlobUrl = (buffer) => {
  const blob = new Blob([new Uint8Array(buffer)], { type: 'application/pdf' });
  return URL.createObjectURL(blob);
};

// Component to view the PDF
const PDFViewer = ({ pdfData }) => {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    if (pdfData) {
      const url = bufferToBlobUrl(pdfData);
      setPdfUrl(url);

      // Cleanup the URL when component unmounts
      return () => URL.revokeObjectURL(url);
    }
  }, [pdfData]);

  return (
    <div>
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
        />
      ) : (
        <p>No PDF available</p>
      )}
    </div>
  );
};

// FolderItem component
const FolderItem = ({ folder }) => {
  // State to manage the PDF data for units
  const [pdfData, setPdfData] = useState(null);

  // Simulate fetching PDF data for demonstration
  const fetchPdfData = async (unit) => {
    // Replace with your actual logic to fetch PDF data
    try {
      const API_URL = `http://127.0.0.1:5000/api/path-to-pdf/${unit.unit_number}`;
      const response = await fetch(API_URL);
      const data = await response.arrayBuffer(); // Convert response to ArrayBuffer
      setPdfData(data);
    } catch (error) {
      console.error("Error fetching PDF data", error);
    }
  };

  // Fetch PDF data when a unit is selected
  useEffect(() => {
    if (folder.units && folder.units.length > 0) {
      fetchPdfData(folder.units[0]); // Fetch data for the first unit as an example
    }
  }, [folder.units]);

  return (
    <div className="w-full rounded-2xl bg-white flex flex-row justify-center text-center items-center h-[120px] border-[2px] border-[#00df9a] gap-2 hover:scale-110 hover:shadow-md duration-200">
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.GJSW6YU4ZZrsp9qmU0lLBAHaFV&pid=Api&P=0&h=180"
        alt="Folder image"
        width={40}
        height={40}
      />
      <h2 className="line-clamp-2 p-1">{folder.sub_name}</h2>
      
      {/* Render units */}
      {folder.units.map((element, index) => (
        <div key={index} className="m-5 w-[100vh]">
          <h3 className="m-1 text-xl text-white">{element.unit_number}</h3>
          {/* Render PDF viewer for the current unit */}
          <PDFViewer pdfData={pdfData} />
        </div>
      ))}
    </div>
  );
};

export default FolderItem;
