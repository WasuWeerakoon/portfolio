import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Certifications", "Projects", "Contact"];

  const handleClick = (id) => {
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id.toLowerCase());
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-blue-900 cursor-pointer"
          onClick={() => handleClick("Home")}
        >
          Wasana Weerakon
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-blue-900 font-medium">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleClick(link)}
                className="hover:text-teal-500 transition-colors duration-300"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-blue-900 text-2xl"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden bg-white/90 flex flex-col items-center space-y-4 py-4 text-blue-900 font-medium">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleClick(link)}
                className="hover:text-teal-500 transition-colors duration-300"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
