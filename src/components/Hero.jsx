import React from "react";
import wasanaPhoto from "../assets/wasana.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-[#1B3C53] text-white px-6 sm:px-10 md:px-20 gap-10"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg font-sans whitespace-nowrap">
          Hi, I'm Wasana Weerakon
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 drop-shadow-md font-serif"
          style={{ color: "#E0FFFF" }}
        >
          Passionate about creating reliable, high-quality software solutions through development and rigorous testing for optimal functionality and user experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start mb-6">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-white text-[#1B3C53] font-bold px-6 py-3 sm:px-10 sm:py-4 rounded-lg shadow-lg hover:bg-teal-400 hover:text-white transition-all duration-300 text-center"
          >
            View My Work
          </a>

          <a
            href="/Wasana_CV.pdf"
            download="Wasana_Weerakon_CV.pdf"
            className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white font-bold px-6 py-3 sm:px-10 sm:py-4 rounded-lg shadow-lg transition-all duration-300 text-center"
          >
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 sm:gap-8 mt-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
          <a
            href="https://www.linkedin.com/in/wasana-weerakon-0a79b82bb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/WasuWeerakoon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-colors"
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
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500 max-w-full h-auto"
        />
      </div>
    </section>
  );
}
