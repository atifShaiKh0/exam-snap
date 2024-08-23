import React from "react";
import FolderItem from "./FolderItem";
import Navbar from "../Navbar";

const FolderList = () => {
  const folderList = [
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
  ];
  return (
    <>
      <Navbar />
      <div className="p-4 m-[200px] rounded-lg ">
        <h2 className="text-xl text-[#00df9a]  font-bold items-center ">
          Subjects{" "}
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 cursor-pointer mt-3">
          {folderList.map((item) => (
            <div>
              <FolderItem folder={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FolderList;
