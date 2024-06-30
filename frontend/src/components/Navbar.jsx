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
    <nav className="m- p-3 flex bg-white justify-between items-center">
      <a href="/" className="flex gap-2 items-center">
        <img className="object-cover h-20 w-20" src={logoImage} alt="" />
        <span className="text-lg font-bold font-display ">Exam Snap</span>
      </a>

      <div className="hidden lg:flex gap-12">
        <a href="/" className="font-bold hover:text-blue-700">
          Home
        </a>
        <a href="/details" className="font-bold hover:text-blue-700">
          Details
        </a>

        <a href="/about" className="font-bold hover:text-blue-700">
          About
        </a>

        <a href="/profile" className="font-bold hover:text-blue-700">
          Profile
        </a>
      </div>

      <a
        href="/profile"
        className="hidden lg:flex gap-2 items-center border border-blue-500 px-6 py-2 rounded-lg hover:border-blue-900"
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
