import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "estateEase",
      desc: "Real estate platform with bidding & wishlist features",
      img: "/projectpics/estateease.jpg",
      tech: "HTML, CSS, JavaScript,MYSQL",
      github: "https://github.com/username/BuyBliss",
    },
    {
      title: "Seagrass Sri Lanka",
      desc: "Seagrass in Sri Lanka: vital underwater plants that support marine biodiversity and coastal ecosystems.",
      img: "/projectpics/seagrasss.png",
      tech: "HTML, CSS, JavaScript, PHP, MySQL, Bootstrap",
      github: "https://github.com/username/estateEase",
    },
    {
      title: "Job Application Portal",
      desc: "Portal for managing job listings using React + Django",
      img: "/projects/jobPortal.jpg",
      tech: "React, Django, CSS, JavaScript",
      github: "https://github.com/username/jobPortal",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-900 px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-blue-900">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-blue-900">{proj.title}</h3>
            <p className="text-gray-700 mb-2">{proj.desc}</p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-semibold">Technologies:</span> {proj.tech}
            </p>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline font-semibold"
            >
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
