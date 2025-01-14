import React from "react";
// import Link from "next/link";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Public,
  Twitter,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <div className=" text-grey-600 grid grid-cols-1 gap-y-10 text-text bg-primary shadow-light-card px-8 py-14 md:grid-cols-3 font-custom">
        <div className="flex flex-col text-text">
          <div className="font-head text-xl md:text-2xl">
            <span className="text-primary-color">&lt;/&gt;</span> Alphacoder
          </div>
          <p className="text-md mt-2">
            "The place where you only solve problems that matters."
          </p>
        </div>
        <div className="flex text-xs flex-col  text-text">
          <h5 className="font-bold text-center mb-8 text-lg  hover:text-primary-color transition">
            Social
          </h5>
          <div className="flex justify-center">
            <a href="https://github.com/HarshKumarraghav" target="_blank">
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <GitHub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-kumar-raghav-7285311b9/"
              target="_blank"
            >
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <LinkedIn />
              </div>
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <Instagram />
              </div>
            </a>

            <a href="https://twitter.com/_Harsh_raghav_" target="_blank">
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <Twitter />
              </div>
            </a>

            <a href="https://harshraghav.me" target="_blank">
              <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary-light rounded-lg hover:-translate-y-4">
                <Public />
              </div>
            </a>
          </div>
        </div>

        <div className="flex text-xs flex-col text-text">
          <h5 className="font-bold text-lg  text-center mb-2 hover:text-primary-color transition">
            About Me
          </h5>
          <h2 className="text-sm">
            Front-end Developer intern at
            <a href="http://botsfusionai.com" target="_blank">
              <span className="text-primary-color"> Bots Fusion AI</span>
            </a>
            , Skilled at Algorithms, C (Programming Language), C++, and Video
            Editing. Strong media and communication professional with a
            Bachelor's degree focused in Information Technology from Gautam
            buddha University.
          </h2>
        </div>
      </div>
      <div className="display flex items-center flex-col bg-primary-light text-text">
        <h5 className="text-md">Create with 💚 by "Harsh Raghav"</h5>
        <h5 className="text-[12px]">Ⓒ2022 Raghav inc. All rights reserved. </h5>
      </div>
    </>
  );
};

export default Footer;
