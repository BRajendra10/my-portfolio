import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-stone-50 relative px-4">

      <button
        onClick={() => navigate('/')}
        className="absolute top-5 left-5 px-4 py-2 text-stone-700 border border-stone-700 hover:text-stone-950 hover:border-stone-950 transition-all duration-300"
      >
        ← Go back
      </button>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 border border-stone-400 overflow-hidden shadow-lg">

        <div className="bg-stone-100 p-7 md:p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-800 mb-4 leading-tight">
            Let's build something cool
          </h2>
          <p className="text-stone-600 text-base md:text-lg">
            If you’ve made it this far, I appreciate your time.
            Feel free to reach out — I’ll try to get back to you soon.
          </p>
        </div>

        <form
          action="https://formspree.io/f/movlpjkv"
          method="POST"
          className="bg-white p-7 md:p-10 flex flex-col gap-5 justify-center"
        >
          <h2 className="text-2xl font-semibold text-stone-800">Contact Me</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="p-3 border border-stone-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="p-3 border border-stone-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all"
          />

          <textarea
            placeholder="Your Message"
            name="message"
            required
            rows="5"
            className="p-3 border border-stone-300 rounded-md resize-none bg-white focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all"
          ></textarea>

          <button
            type="submit"
            className="bg-stone-800 text-white py-3 rounded-md hover:bg-stone-950 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
