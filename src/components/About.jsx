import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-20"
    >
      <div className="max-w-3xl text-center bg-blue-900 p-12 rounded-2xl shadow-xl hover:shadow-blue-700 transition-shadow duration-500">
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-white text-lg leading-relaxed">
          I am <span className="font-semibold">moda Wasana Weerakoon</span>, a self-confident and balanced aspiring professional in software development and quality assurance.  

          I enjoy turning complex problems into simple, effective solutions, and I bring a methodical and analytical approach to every project I undertake.  

          <br /><br />
          I thrive on continuous learning, improving my technical and soft skills, and delivering projects that reflect reliability, precision, and creativity.  
          My goal is to contribute meaningfully to impactful software solutions while maintaining a balanced and professional mindset.
        </p>
      </div>
    </section>
  );
}
