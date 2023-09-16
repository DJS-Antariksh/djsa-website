import React, { useState } from "react";
import AntarikshLogo from "./AntarikshLogo.png";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex justify-around items-center mx-auto">
        <div>
          <img
            className="w-36 cursor-pointer"
            src={AntarikshLogo}
            alt="AntarikshLogo"
          />
        </div>
        <div
          className={`nav-links duration-500 ${
            menuOpen ? "" : "md:static absolute"
          } md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li><a className="hover:text-gray-500 text-white" href="#">Home</a></li>
            <li><a className="hover:text-gray-500 text-white" href="#">About</a></li>
            <li><a className="hover:text-gray-500 text-white" href="#">Achievements</a></li>
            <li><a className="hover:text-gray-500 text-white" href="#">Department</a></li>
            <li><a className="hover:text-gray-500 text-white" href="#">ContactUs</a></li>
          </ul>
        </div>
        <div className="flex gap-6">
          <button
            onClick={toggleMenu}
            name={menuOpen ? "close" : "menu"}
            className="text-3xl text-white cursor-pointer md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}

export default LandingPage;

