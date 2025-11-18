import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString();

    const templateParams = {
      name: form.current.user_name.value,
      message: form.current.message.value,
      time: currentTime,
    };

    emailjs
      .send(
        "service_2bhiavo",
        "template_mbkb68g",
        templateParams,
        "G0uWtoxYxwFVmyzKE"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center 
                 bg-gray-900 text-gray-100 px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-8 text-teal-400">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md 
                   bg-gray-800 p-8 rounded-2xl shadow-lg shadow-black/50"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="border-none p-3 rounded-md text-gray-100 font-medium 
                     bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border-none p-3 rounded-md text-gray-100 font-medium 
                     bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          rows="5"
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold 
                     px-4 py-3 rounded-lg transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
