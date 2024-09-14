import React, { useEffect, useState } from "react";
import FolderItem from "./FolderItem";
import Navbar from "../Navbar";
import axios from "axios";

// Extract API URL to a configuration file or environment variable
const API_URL = "http://127.0.0.1:5000/api/courses/getCourse?name=Aabid44";

const FolderList = () => {
  const [folderList, setFolderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        // Ensure data structure is correct before accessing
        if (response.data && response.data.semesters && response.data.semesters.length > 0) {
          setFolderList(response.data.semesters[0].subjects || []);
          console.log(response.data.semesters[0].subjects[0])
        } else {
          setFolderList([]);
        }
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <div className="p-4 m-[200px] rounded-lg">
        <h2 className="text-xl text-[#00df9a] font-bold">
          Subjects
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 cursor-pointer mt-3">
          {folderList.length > 0 ? (
            folderList.map((subject, index) => (
              <div key={subject.id || index}> {/* Use a unique key for each item */}
                <FolderItem folder={subject || "Unknown"} /> {/* Handle undefined fields */}
              </div>
            ))
          ) : (
            <div>No subjects available.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default FolderList;
