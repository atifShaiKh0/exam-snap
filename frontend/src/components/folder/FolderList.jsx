import React, { useEffect, useState } from "react";
import FolderItem from "./FolderItem";
import Navbar from "../Navbar";
import axios from "axios";

const FolderList =  () => {
  const [folderList,setFolderList] = useState([
    {
      id: 1,
      name: "Automata",
    },
    {
      id: 2,
      name: "Compiler Design",
    },
    {
      id: 3,
      name: "Data Base Management System",
    },
    {
      id: 4,
      name: "Networking",
    },
    {
      id: 5,
      name: "Discrete Mathematics",
    },
    {
      id: 6,
      name: "COA",
    },
  ])

  useEffect(()=>{
    const fetchData = async() =>{
      try {
        
        const API_URL = `http://127.0.0.1:5000/api/courses/getCourse?name=B.Tech`;
        const response = await axios
          .get(API_URL)
        console.log(response.data.semesters[0].subjects)
        setFolderList(response.data.semesters[0].subjects)
      } catch (error) {
        console.log(error);
      }

    }
    fetchData();
  },[])
  return (
    <>
      <Navbar />
      <div className="p-4 m-[200px] rounded-lg ">
        <h2 className="text-xl text-[#00df9a]  font-bold items-center ">
          Subjects{" "}
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 cursor-pointer mt-3">
          {folderList.map((subject) => (
            <div>
              <FolderItem folder={subject} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FolderList;
