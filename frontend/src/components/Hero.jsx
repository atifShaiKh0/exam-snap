import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <ReactTyped
          className="text-[#00df9a] text-2xl font-bold p-2"
          startWhenVisible
          strings={["Ace your Exam, even at the Last Minute!"]}
          typeSpeed={100}
        />
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          EXAM SNAP
        </h1>
        <div className="flex justify-center items-center">
          <ReactTyped
            className="text-2xl"
            startWhenVisible
            strings={[
              "Especially for <strong>Uttarakhand Technical University</strong> , Dehradun",
            ]}
            typeSpeed={40}
          />
        </div>
        <div>
          <ReactTyped
            className="text-xl"
            strings={[
              "Turn <strong>Panic</strong> into Performance!",
              "Your <strong>One-Night</strong> Study Solution!",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>

        <a href="/login">
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </a>

        <div></div>
      </div>
    </div>
  );
};

export default Hero;
