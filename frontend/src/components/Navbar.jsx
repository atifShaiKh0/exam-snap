import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-950 text-2xl flex gap-3 font-bold text-white mt-9 p-9 ">
      <Link to="/">HOME</Link>
      <Link to="/profile">PROFILE</Link>

      <Link to="/about">ABOUT</Link>
    </div>
  );
};

export default Navbar;
