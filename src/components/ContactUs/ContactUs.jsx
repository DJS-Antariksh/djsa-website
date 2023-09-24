import React from "react";
import "./ContactUs.css"

function ContactUs() {
  return (
<div className="flex justify-center items-center h-screen mr-4">
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4 text-white text-center">Contact Us</h1>
    <form className="max-w-3xl mx-auto p-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4 flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-4 text-white" htmlFor="name">
            Company Name
          </label>
          <input
            className="border border-white py-2 px-3 border-opacity-40 text-white w-full bg-transparent focus:border-white"
            type="text"
            id="name"
            name="name"
            // placeholder="Your Company Name"
          />
        </div>
        <div className="mb-4 flex flex-col ">
          <label className="block text-gray-700 text-sm font-bold mb-4 ml-14 text-white" htmlFor="email">
            Email
          </label>
          <input
            className="border border-white py-2 px-3 border-opacity-40 text-white w-full bg-transparent ml-14 focus:border-white"
            type="email"
            id="email"
            name="email"
            // placeholder="Your Email"
          />
        </div>
        <div className="mb-10 flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-4 text-white" htmlFor="nationality">
            Nationality
          </label>
          <input
            className="border border-white py-2 px-3 border-opacity-40 text-white w-full bg-transparent focus:border-white"
            type="text"
            id="nationality"
            name="nationality"
            // placeholder="Your Nationality"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-4 ml-14 text-white" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="border border-white py-2 px-3 border-opacity-40 text-white w-full bg-transparent ml-14 focus:border-white"
            type="text"
            id="phone"
            name="phone"
            // placeholder="Your Phone Number"
            />

        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-4  text-white" htmlFor="message">
          Message
        </label>
        <textarea
          className="border text-white lg py-2 px-3 border-opacity-40  w-[111%] bg-transparent h-16  focus:border-white"
          id="message"
          name="message"
          
        ></textarea>
      </div>
      <div className="text-center">
      <button
        className=" bg-transparent border 3xl border-white text-white text-lg mt-5 ml-14 font-bold py-3 px-8 focus:outline-none focus:shadow-outline-blue active:bg-white-800 mx-auto"
        type="submit"
        
        >
        Submit
        </button>
        </div>
    </form>
  </div>
</div>

  );
};
export default ContactUs;
