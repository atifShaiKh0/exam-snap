import React from "react";

const FolderItem = ({ folder }) => {
  return (
    <>
      <div className="w-full rounded-2xl bg-white flex flex-row justify-center text-center items-center h-[120px] border-[2px] border-[#00df9a] gap-2 hover:scale-110 hover:shadow-md duration-200">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.GJSW6YU4ZZrsp9qmU0lLBAHaFV&pid=Api&P=0&h=180"
          alt="Folder image"
          width={40}
          height={40}
        />
        <h2 className="line-clamp-2 p-1">{folder.name}</h2>
      </div>
    </>
  );
};

export default FolderItem;
