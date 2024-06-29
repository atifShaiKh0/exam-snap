import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="p-3 bg-yellow-300 text-5xl font-bold">
        This is About Page
      </div>
      <Footer />
    </div>
  );
};

export default About;
