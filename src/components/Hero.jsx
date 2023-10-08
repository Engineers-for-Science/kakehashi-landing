import React from "react";
import Typed from "react-typed";

const Hero = () => {
  const bigTitle = "An Open Science Marketplace";
  const nasa = "> NASA Space Apps Challenge 2023";
  return (
    <div className="" id="home">
      <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        {/* <p className='font-bold p-1'>GROWING WITH OTHERS</p> */}
        <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold py-4 md:py-5">
          {bigTitle}
        </h1>
        <div className="flex justify-center items-center w-full">
          <p className="md:text-3xl sm:text-2xl text-sm font-bold text-gray-400">
            {"Bridging Project Owner With\u00A0 <-> Skilled"}
          </p>
          <Typed
            className="md:text-3xl sm:text-2xl text-sm font-bold text-gray-400 md:pl-4 pl-2"
            strings={["Scientists", "Engineers", "Reseachers", "Developers"]}
            typeSpeed={140}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-base font-semibold text-gray-700 py-4">
          {nasa}
        </p>
        <a href="https://kakehashi-platform.vercel.app/home/find-contributors" target="_blank" rel="noreferrer">
          <button className="w-[200px] rounded-md font-medium my-4 mx-auto py-3  text-white border bg-black hover:bg-transparent hover:text-black hover:border-black ">
            Find a Contributor
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
