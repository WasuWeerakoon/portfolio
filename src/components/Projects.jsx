import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "estateEase",
      desc: "Real estate platform with bidding & wishlist features",
      img: "/projectpics/estateease.png",
      tech: "HTML, CSS, JavaScript, Boostrap, MYSQL",
      github: "https://github.com/WasuWeerakoon/EstateEase-PHP.git",
    },
    {
      title: "Seagrass Sri Lanka",
      desc: "Seagrass in Sri Lanka: vital underwater plants that support marine biodiversity and coastal ecosystems.",
      img: "/projectpics/Seagrass_SriLanka.png",
      tech: "React, Django, Tailwind CSS, Flask, Unity, PostgreSQL",
      github: "https://polite-desert-02a5b7610.2.azurestaticapps.net/",
    },
    {
      title: "Job Application Portal",
      desc: "Job Portal System is a web platform connecting job seekers and employers.",
      img: "/projectpics/Job_Portal.png",
      tech: "React, Django, CSS, JavaScript",
      github: "https://github.com/WasuWeerakoon/Job-Portal.git",
    },
    {
      title: "Pet Adoption System",
      desc: "Pet Adoption System is a web platform connecting adopters with pets, developed for WAD coursework to ensure a secure and user-friendly adoption process.",
      img: "/projectpics/Pet_Adoption.png",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      github: "https://github.com/WasuWeerakoon/Pet-Adoption-PHP-MYSQL.git",
    },
    {
      title: "ExerSense",
      desc: "ExerSense is a low-cost, portable system using ECG and EMG sensors to monitor heart and muscle activity for real-time workout and health tracking.",
      img: "/projectpics/ExcerSense.png",
      tech: "ESP32 Devkit V1, AD8232 ECG Sensor, AD8226 EMG Sensor, Arduino IDE, Android Studio",
      github: "https://www.youtube.com/watch?v=yU_ihv5Gjkc",
    },
     {
      title: "FingerPrint Identifier",
      desc: "Our project used a fingerprint reader and an ESP32 microcontroller to develop a secure user authentication system. It is able to do fingerprint enrollment, saving data in an SD card, and simple verification for access control.",
      img: "/projectpics/Finger Print.png",
      tech: "Bread Board, Fingerprint Sensor: Adafruit DY50 2V1, ESP32 Board, SD Card Reader Module, USB Cable, Proteus, Arduino IDE",
      github: "https://github.com/PasanRamyanath/Fingerprint-scanner-using-ESP32",
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
