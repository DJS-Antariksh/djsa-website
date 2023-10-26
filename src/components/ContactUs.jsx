import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_5irlloe', form.current, 'mUxoWB6DcmwUjyR-v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div
      className="flex items-center justify-center h-screen mr-4 mt-[-3rem] component_title"
      id="contactUs"
    >
      <div className="p-4">
        <h1 className="mb-4 text-2xl text-center text-white font-meth">
          Contact Us
        </h1>
        <form ref={form} onSubmit={sendEmail} className="max-w-3xl p-8 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col mb-4">
              <label
                className="block mb-4 text-sm text-white text-gray-700 font-poppins tracking-widest"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-white bg-transparent border border-white border-opacity-40 focus:border-white"
                type="text"
                id="name"
                name="name"
                // placeholder="Your Company Name"
              />
            </div>
            <div className="flex flex-col mb-4 ">
              <label
                className="block mb-4 text-sm text-white text-gray-700 font-poppins ml-14 tracking-widest"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-white bg-transparent border border-white border-opacity-40 ml-14 focus:border-white"
                type="email"
                id="email"
                name="email"
                // placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col mb-10">
              <label
                className="block mb-4 text-sm text-white text-gray-700 font-poppins tracking-widest"
                htmlFor="nationality"
              >
                Nationality
              </label>
              <input
                className="w-full px-3 py-2 text-white bg-transparent border border-white border-opacity-40 focus:border-white"
                type="text"
                id="nationality"
                name="nationality"
                // placeholder="Your Nationality"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="block mb-4 text-sm text-white text-gray-700 font-poppins ml-14 tracking-widest"
                htmlFor="phone"
              >
                Number
              </label>
              <input
                className="w-full px-3 py-2 text-white bg-transparent border border-white border-opacity-40 ml-14 focus:border-white"
                type="text"
                id="phone"
                name="phone"
                // placeholder="Your Phone Number"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-4 text-sm text-white text-gray-700 font-poppins tracking-widest"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="border text-white lg py-2 px-3 border-opacity-40  w-[108%] bg-transparent h-16  focus:border-white"
              id="message"
              name="message"
            ></textarea>
          </div>
          <div className="text-center font-poppins">
            <button
              className="px-8 py-3 mx-auto mt-5 text-lg text-white bg-transparent border border-white font-poppins 3xl ml-14 focus:outline-none focus:shadow-outline-blue active:bg-white-800"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactUs;
