import React from "react";
import taro from "../assets/taro.jpg";
import willLiu from "../assets/will_liu.jpg";
import kaiyu from "../assets/kaiyu.jpg";
import jack from "../assets/jack.jpg";
import jac from "../assets/jac_yep.jpg"
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineGlobal,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";

const AboutUs = () => {
  return (
    <div name="about" className="w-full pt-[9rem] px-4 relative">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Meet the Team
        </h2>
        <p className="text-lg md:text-2xl py-8 text-gray-600 text-center">
          We are a team of passionated developers. Our goal with KAKEHASHI is to
          create a space acts as the perfect conduit for open-source enthusiasts
          to find projects they're passionate about.
        </p>
        {/* <div className='grid md:grid-cols-2 gap-8 mt-10'> */}
        <div className="flex flex-wrap justify-center gap-12 mt-10">
          {/* Individual Card  */}
          <div className="w-full md:w-1/3 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300">
            <div className="w-48 h-48 mx-auto mt-[-3rem] rounded-xl object-cover truncate">
              <img src={taro} alt="profile-pic" />
            </div>
            <h2 className="text-3xl font-bold text-center py-6">Taro</h2>
            <p className="text-center text-lg mb-6">
              Full-stack developer from Japan. Passionate about merging robust backends
              and perpetually exploring innovative
              digital solutions.
            </p>
            <div className="flex p-4 align-middle justify-center gap-10">
              <a
                href="https://www.linkedin.com/in/taro-ishihara-3aa908234/"
                target="_blank" rel="noreferrer"
              >
                <AiFillLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/taro-ishihara" target="_blank" rel="noreferrer">
                <AiOutlineGithub className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Individual Card  */}
          <div className="w-full md:w-1/3 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300">
            <div className="w-48 h-48 mx-auto mt-[-3rem] rounded-xl object-cover truncate">
              <img src={jack} alt="profile-pic" />
            </div>
            <h2 className="text-3xl font-bold text-center py-6">Jack</h2>
            <p className="text-center text-lg mb-6">
              Web developer from the SF Bay Area, love creative
              development & web art, and have
              built many projects that experiment with webGL & 3D web experiences.
            </p>
            <div className="flex p-4 align-middle justify-center gap-10">
              <a
                href="https://www.linkedin.com/in/jackyoukstetter/"
                target="_blank" rel="noreferrer"
              >
                <AiFillLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/JackYouk" target="_blank" rel="noreferrer">
                <AiOutlineGithub className="text-3xl" />
              </a>
              <a href="https://jackjack.dev/" target="_blank" rel="noreferrer">
                <AiOutlineGlobal className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Individual Card  */}
          <div className="w-full md:w-1/3 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300">
            <div className="w-48 h-48 mx-auto mt-[-3rem] rounded-xl object-cover truncate">
              <img src={kaiyu} alt="profile-pic" />
            </div>
            <h2 className="text-3xl font-bold text-center py-6">Kaiyu</h2>
            <p className="text-center text-lg mb-6">
              I am a driven and dedicated full-stack developer with knowledge in
              React, MongoDB, Express, Node.js, Python,
              Flask, SQL, Bootstrap and TailwindCSS. I enjoy working with others
              to build web applications that capture my curiosity.
            </p>
            <div className="flex p-4 align-middle justify-center gap-10">
              <a
                href="https://www.linkedin.com/in/aria-ma-2199a0271/"
                target="_blank" rel="noreferrer"
              >
                <AiFillLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/Kaiyu113" target="_blank" rel="noreferrer">
                <AiOutlineGithub className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Individual Card  */}
          <div className="w-full md:w-1/3 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300">
            <div className="w-48 h-48 mx-auto mt-[-3rem] rounded-xl object-cover truncate">
              <img src={willLiu} alt="profile-pic" />
            </div>
            <h2 className="text-3xl font-bold text-center py-6">William</h2>
            <p className="text-center text-lg mb-6">
              Front-end Engineer from Hawaii, with
              experience in react, redux, Typescript, node.js. Eager to learn
              and develop any application that interests me.
            </p>
            <div className="flex p-4 align-middle justify-center gap-10">
              <a href="https://www.linkedin.com/in/willliu06" target="_blank" rel="noreferrer">
                <AiFillLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/waileungl" target="_blank" rel="noreferrer">
                <AiOutlineGithub className="text-3xl" />
              </a>
              <a href="https://wlliu.com" target="_blank" rel="noreferrer">
                <AiOutlineGlobal className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Individual Card  */}
          <div className="w-full md:w-1/3 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300">
            <div className="w-48 h-48 mx-auto mt-[-3rem] rounded-xl object-cover truncate">
              <img src={jac} alt="profile-pic" />
            </div>
            <h2 className="text-3xl font-bold text-center py-6">Jacqueline</h2>
            <p className="text-center text-lg mb-6">
              I am a driven and dedicated full-stack developer with knowledge in
              React, MongoDB, Express, Node.js, Python,
              Flask, SQL, Bootstrap and TailwindCSS. I enjoy working with others
              to build web applications that capture my curiosity.
            </p>
            <div className="flex p-4 align-middle justify-center gap-10">
              <a href="https://www.linkedin.com/in/jacqueline-yeh-33051b18b/" target="_blank" rel="noreferrer">
                <AiFillLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <LinkScroll to="home" smooth={true} offset={0} duration={500}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 animate-bounce bg-white">
              <AiOutlineArrowUp className="text-black" size={25} />
            </div>
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
