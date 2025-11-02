import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-900 px-6 py-20">
      <h2 className="text-4xl font-bold mb-8 text-blue-900">Contact Me</h2>
      <form className="flex flex-col gap-4 w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <input type="text" placeholder="Name" className="border-none p-3 rounded-md text-gray-900 font-medium bg-gray-100"/>
        <input type="email" placeholder="Email" className="border-none p-3 rounded-md text-gray-900 font-medium bg-gray-100"/>
        <textarea placeholder="Message" className="border-none p-3 rounded-md text-gray-900 font-medium bg-gray-100" rows="5"/>
        <button type="submit" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-4 py-3 rounded-lg transition-all duration-300">Send Message</button>
      </form>
    </section>
  );
}
