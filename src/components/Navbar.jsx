import { useState } from "react";
import AntarikshLogo from "../assets/AntarikshLogo.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"
import home from "../assets/home.png"
import medal from "../assets/medal.png"
import group from "../assets/group.png"
import departmentLogo from "../assets/departmentLogo.png"
import contactUs from "../assets/contactUs.png"
import hamburgerMenu from "../assets/hamburgerMenu.png"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        className={`flex items-center justify-around`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <img
          className={`w-48 cursor-pointer antarikshLogo ${isOpen ? '' : ''}`}
          src={AntarikshLogo}
          alt="AntarikshLogo"
        />
        <ul className={`flex gap-8 ml-96 `}>
          <li>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className={`text-lg font-light text-white cursor-pointer font-poppins hover:text-gray-500 hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm ${isOpen ? '' : 'navLinkDisplay'}`}
            >
              {isOpen ? <img src={home} alt="home"/> : 'Home'}
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className={`text-lg font-light text-white cursor-pointer font-poppins hover:text-gray-500 hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm ${isOpen ? '' : 'navLinkDisplay'}`}
            >
              {isOpen ? <img src={group} alt="group"/> : 'About'}
            </Link>
          </li>
          <li>
          <RouterLink
            to="/irc"
            className={`text-lg font-light text-white cursor-pointer font-poppins hover:text-gray-500 hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm ${isOpen ? '' : 'navLinkDisplay'}`}
          >
            {isOpen ? <img src={medal} alt="medal" /> : 'IRC'}
          </RouterLink>

          </li>
          <li>
            <Link
              to="achievements"
              spy={true}
              smooth={true}
              duration={500}
              className={`text-lg font-light text-white cursor-pointer font-poppins hover:text-gray-500 hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm ${isOpen ? '' : 'navLinkDisplay'}`}
            >
              {isOpen ? <img src={medal} alt="medal"/> : 'Achievements'}
            </Link>
          </li>
          <li>
            <Link
              to="department"
              spy={true}
              smooth={true}
              duration={500}
              className={`text-lg font-light text-white cursor-pointer font-poppins hover:text-gray-500 hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm ${isOpen ? '' : 'navLinkDisplay'}`}
            >
                {isOpen ? <img src={departmentLogo} alt="departmentLogo"/> : 'Departments'}
            </Link>
          </li>
  
          <li>
      <Link
        to="contactUs"
        spy={true}
        smooth={true}
        duration={500}
        className={`text-lg font-light text-white cursor-pointer font-poppins hover:text-gray-500 hover:decoration-white/30 md:text-xl xxl:text-5xl sm:text-sm ${isOpen ? '' : 'navLinkDisplay'}`}
        target="_blank" // Add this line to open the link in a new tab or window
        rel="noopener noreferrer" // Recommended for security, especially when using target="_blank"
      >
        {isOpen ? <img src={contactUs} alt="contactUs"/> : 'Contact'}
      {/* <Rover /> */}

      </Link>
    </li>
        </ul>
        <p onClick={toggleDropdown} className="flex flex-col hidden hamburgerMenu">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg> */}
              <img src={hamburgerMenu} alt="hamburgerMenu"/>
        </p>
        {/* <div className="flex gap-6">
          <button
            onClick={toggleMenu}
            name={menuOpen ? "close" : "menu"}
            className={`text-3xl text-white cursor-pointer md:hidden ${
              menuOpen ? "hidden" : ""
            }`}
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
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;