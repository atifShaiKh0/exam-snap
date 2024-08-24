import React from "react";

import menu from "../public/menu-bars-icon-10.jpg";
import profile from "../public/images.png";
import logoImage from "../public/download.png";

const Navbar = () => {
  function handleMenu() {
    console.log("Atif shikh");
  }

  const navDialog = document.getElementById("nav-dialog");
  function handleMenu() {
    navDialog.classList.toggle("hidden");
  }

  return (
    <nav className=" mr-12 p-3 flex bg-gray-300 justify-between items-center">
      <a href="/" className="flex gap-2 items-center">
        <img className="object-cover h-20 w-20" src={logoImage} alt="" />
        <span className="text-lg text-[#00df9a] font-bold font-display ">
          Exam Snap
        </span>
      </a>

      <div className="hidden lg:flex gap-12">
        <a
          href="/"
          className="font-semibold hover:bg-[#00df9a] hover:text-white border  rounded-md px-4 py-2 transition duration-300"
        >
          Home
        </a>
        <a
          href="/details"
          className="font-semibold hover:bg-black hover:text-white border rounded-2xl px-4 py-2 transition duration-300"
        >
          Details
        </a>

        <a
          href="/about"
          className="font-semibold hover:bg-black hover:text-white border  rounded-md px-4 py-2 transition duration-300"
        >
          About
        </a>

        <a
          href="/profile"
          className="font-semibold hover:bg-black hover:text-white border rounded-md px-4 py-2 transition duration-300"
        >
          Profile
        </a>
      </div>

      <a
        href="/profile"
        className="hidden lg:flex gap-2 items-center border hover:bg-black hover:text-white rounded-2xl px-4 py-2 transition duration-300"
      >
        <img src={profile} className="max-w-12 max-h-12" alt="" />
        Profile
      </a>

      <button className="p-2 lg:hidden" onClick={handleMenu}>
        <img className="max-w-12  max-h-12" src={menu} alt="" />
      </button>

      <div
        id="nav-dialog"
        className="hidden fixed z-10 bg-blue-200 inset-0 p-3"
      >
        <div className="flex justify-between">
          <a href="/" className="flex gap-2 items-center">
            <img
              className="object-cover max-w-12 max-h-12"
              src={logoImage}
              alt=""
            />
            <span className="text-lg font-medium font-display ">Exam Snap</span>
          </a>
          <button className="p-2 md:hidden" onClick={handleMenu}>
            <img className="max-w-12  max-h-12" src={menu} alt="" />
          </button>
        </div>
        <div className="mt-6">
          <a
            href="/"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            Home
          </a>
          <a
            href="/profile"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            Profile
          </a>
          <a
            href="/about"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            About
          </a>
          <a
            href="/details"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            details
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
