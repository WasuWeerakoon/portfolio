import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaUsers, FaClock, FaFileAlt, FaBrain } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { GiLaurelsTrophy } from "react-icons/gi";

export default function Skills() {
  const technicalSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "React", icon: <FaReact className="text-blue-600" /> },
    { name: "SQL", icon: <SiMysql className="text-green-600" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "MS Office", icon: <FaFileAlt className="text-blue-700" /> },
  ];

  const softSkills = [
    { name: "Project Management", icon: <MdOutlineAssignmentTurnedIn className="text-blue-700" /> },
    { name: "Teamwork", icon: <FaUsers className="text-blue-500" /> },
    { name: "Time Management", icon: <FaClock className="text-blue-600" /> },
    { name: "Leadership", icon: <GiLaurelsTrophy className="text-yellow-500" /> },
    { name: "Report Writing", icon: <FaFileAlt className="text-blue-700" /> },
    { name: "Self-Confidence", icon: <FaBrain className="text-purple-600" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
      style={{ backgroundColor: "#456882" }} // outer background
    >
      <h2 className="text-4xl font-bold mb-16 text-white">Skills</h2>

      {/* Large inner container wrapping both Technical and Soft Skills */}
      <div
        className="p-16 rounded-3xl shadow-xl w-full max-w-6xl space-y-12"
        style={{ backgroundColor: "#7FA6C1" }} // softer inner box color
      >
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <h4 className="text-[#456882] font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">Soft Skills</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <h4 className="text-[#456882] font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
