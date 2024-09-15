import React, { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    const url = 'http://localhost:8000/api/pdf/fetch-file'; // Your backend server URL

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);
      document.getElementById('file-display').src = objectURL;
    })
    .catch((error) => console.error('Error fetching file:', error));
  }, []);
  return <div className="bg-white">
    <iframe id="file-display" width="600" height="400"></iframe>
    <h1 className="text:white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis, aperiam recusandae consectetur cum placeat a. Velit adipisci, corporis unde ad aut voluptatibus! Aspernatur excepturi quos voluptatem in quod beatae!</h1>
  </div>;
}
