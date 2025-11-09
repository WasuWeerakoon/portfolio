import React, { useState } from "react";

export default function Certifications() {
  const certs = [
    {
      title: "Dean's List",
      description: "Awarded for achieving the Dean’s List for outstanding academic performance.",
      img: "/certs/Dean Certificate.jpg",
    },
    {
      title: "Business Analysis Basics",
      description: "Mastered the fundamental concepts and essential skills of Business Analysis.",
      img: "/certs/Business Basics_.jpg",
    },
    {
      title: "Selinium Basics",
      description: "Mastered fundamental concepts and practical skills in Selenium Basics.",
      img: "/certs/Selenium Basics.jpg",
    },
    {
      title: "Artificial Intelligence Beginner’s Guide",
      description: "Acquired foundational knowledge and essential skills in Artificial Intelligence.",
      img: "/certs/AI.jpg",
    },
    {
      title: "AI/ML Engineer",
      description: "Acquired comprehensive knowledge and practical skills in Artificial Intelligence and Machine Learning engineering.",
      img: "/certs/AIML Engineer.jpg",
    },
    {
      title: "Introduction to Jira",
      description: "Acquired foundational knowledge and practical skills in Jira for effective project tracking and management.",
      img: "/certs/Introduction to Jira.jpg",
    },
    {
      title: "Project Management",
      description: "Gained essential understanding of Project Management principles and methodologies for successful project execution.",
      img: "/certs/Project Management.jpg",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certifications"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-16 text-blue-900">Certifications</h2>

      {/* Outer container box with #90CAF9 */}
      <div className="bg-[#90CAF9] p-12 rounded-3xl shadow-xl w-full max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{cert.title}</h3>
              <p className="text-gray-700 text-sm hover:font-bold transition-all duration-300">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full view */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-3xl w-full relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-black transition-colors duration-300"
              onClick={() => setSelectedCert(null)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{selectedCert.title}</h3>
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-6 font-bold">{selectedCert.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
