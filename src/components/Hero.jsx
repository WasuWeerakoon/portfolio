import React from "react";
import wasanaPhoto from "../assets/wasana.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-blue-900 via-blue-800 to-teal-500 text-white px-6 md:px-20 gap-10"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        {/* Greeting with Full Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg font-sans whitespace-nowrap">
           Hi, I'm Wasana Weerakon
        </h1>


        {/* Role */}
        <p className="text-2xl md:text-3xl mb-6 drop-shadow-md font-serif">
          Aspiring Software Engineer & QA Engineer
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mb-6">
          <a
            href="#projects"
            className="bg-white text-blue-900 font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            View My Work
          </a>
          <a
            href="/Wasana_CV.pdf"
            download
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-10 py-4 rounded-lg shadow-lg transition-all duration-300 text-center"
          >
            Download CV
          </a>
        </div>

       {/* Social Links */}
<div className="flex justify-center md:justify-start gap-8 mt-4 text-5xl">
  <a
    href="https://www.linkedin.com/in/wasana-weerakon-0a79b82bb"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/WasuWeerakoon"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    <FaGithub />
  </a>
</div>

      </div>

      {/* Photo Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={wasanaPhoto}
          alt="Wasana Nilakshi"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white"
        />
      </div>
    </section>
  );
}
