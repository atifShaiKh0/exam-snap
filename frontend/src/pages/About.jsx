import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import atifImage from "../public/WhatsApp Image 2024-06-30 at 04.53.09.jpeg";
import abidImage from "../public/WhatsApp Image 2024-06-30 at 04.54.08.jpeg";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="font-Poppins grid sm:grid-cols-1 bg-dark_purple text-white">
        <div className="text-center py-10">
          <h5 className="text-heading_color">Designed And Developed By : </h5>
          <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
            Connect With Us
          </h1>
          <div className="flex max-w-5xl mx-auto gap-8 group">
            <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500  p-8 rounded-xl mix-blend-luminosity">
              <img
                height={400}
                width={300}
                className="  mx-auto"
                src={atifImage}
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">Atif Shaikh</h4>
              <p className="text-sm leading-7 my-3 font-light opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo fugiat inventore rem quos! Eligendi amet perferendis
                quia consequatur inventore sapiente deleniti tempora possimus
                dignissimos architecto?
              </p>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full">
                Get in Touch
              </button>
            </div>
            <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer  p-8 rounded-xl mix-blend-luminosity">
              <img
                height={400}
                width={300}
                className="  mx-auto"
                src={abidImage}
                alt=""
              />
              <h4 className="uppercase text-xl font-bold">aabid hussain</h4>
              <p className="text-sm leading-7 my-3 font-light opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo fugiat inventore rem quos! Eligendi amet perferendis
                quia consequatur inventore sapiente deleniti tempora possimus
                dignissimos architecto?
              </p>
              <button className="bg-btn_primary cursor-pointer  py-2.5 px-8 rounded-full">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
