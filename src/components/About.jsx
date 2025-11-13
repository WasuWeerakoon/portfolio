import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center px-6 py-20 overflow-hidden
                 bg-gradient-to-b from-gray-100 via-teal-50 to-gray-100"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-80px] left-[-60px] w-72 h-72 bg-[#234C6A] rounded-full opacity-25 blur-3xl animate-pulse"></div>
      <div className="absolute top-[-40px] right-[-60px] w-64 h-64 bg-teal-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] left-[-40px] w-80 h-80 bg-[#1B3C53] rounded-full opacity-15 blur-3xl animate-pulse"></div>

      {/* About Card */}
      <div
        className="relative max-w-3xl text-center p-12 rounded-3xl shadow-2xl
                   bg-gradient-to-br from-[#234C6A] to-[#1B3C53] text-white
                   border-2 border-white/20 transform transition-transform duration-500 hover:scale-105"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I am <span className="font-semibold">Wasana Weerakoon</span>, a self-confident and balanced aspiring professional in software development and quality assurance.  

          <br /><br />
          I enjoy turning complex problems into simple, effective solutions, and I bring a methodical and analytical approach to every project I undertake.  

          <br /><br />
          I thrive on continuous learning, improving my technical and soft skills, and delivering projects that reflect reliability, precision, and creativity.  
          My goal is to contribute meaningfully to impactful software solutions while maintaining a balanced and professional mindset.
        </p>
      </div>
    </section>
  );
}
