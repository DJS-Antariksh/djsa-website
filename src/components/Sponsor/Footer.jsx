import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import logo from "../../assets/AntarikshLogo.png";
import bg from "../../assets/footerbg.png";
import { Link } from "react-scroll";
import {FaXTwitter} from 'react-icons/fa6';



const Footer = () => (
  <div className="relative">
    <img src={bg} alt="footerbg" className="absolute z-0 object-cover w-full h-[26rem]" />
    <section className="relative flex flex-col items-center justify-center py-6 sm:py-16 z-99">
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full mb-8 justify-center">

        <div className="flex flex-col items-center md:items-center lg:mr-20">
          <img src={logo} alt="AntarikshLogo" className="h-[90px] object-contain mb-4" />
          <p className="font-poppins font-extralight text-white text-[18px] max-w-[312px] text-center md:text-center">
            The Official Martian Rover Team of Dwarkadas J. Sanghvi College of Engineering.
          </p>
        </div>

        {/* Hide the Useful Links section on small screens */}
        {/* <div className="hidden sm:flex flex-col items-center md:items-start mt-8 md:mt-0">
          <h4 className="font-poppins font-normal text-[18px] leading-[27px] text-white mb-4">Useful Links</h4>
          <ul className="list-none font-poppins text-[16px] leading-[24px] text-white">
            <li className="mt-2 md:mt-4">
              <Link to="/" spy={true} smooth={true} duration={500} className="text-white cursor-pointer hover:text-gray-500">
                Home
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer font-extralight font-poppins hover:text-gray-500 hover:decoration-white/30"
              >
                About Us
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="achievements" 
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer font-extralight font-poppins hover:text-gray-500 hover:decoration-white/30"
              >
                Achievements
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="contactUs"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer font-extralight font-poppins hover:text-gray-500 hover:decoration-white/30"
              >
                Contact Us
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="sponsor"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer font-extralight font-poppins hover:text-gray-500 hover:decoration-white/30"
              >
                Sponsors
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Hide the About the Team section on small screens */}
        {/* <div className="hidden sm:flex flex-col items-center md:items-start mt-4 md:mt-0">
          <h4 className="font-poppins font-normal text-[18px] leading-[27px] text-white mb-4">About the Team</h4>
          <ul className="list-none font-poppins text-[16px] leading-[24px] text-white">
            <li className="mt-2 md:mt-4 hover:text-secondary">
              <Link to="rover" spy={true} smooth={true} duration={500} className="text-white cursor-pointer hover:text-gray-500">
                Our Rover
              </Link>
            </li>
           
          </ul>
        </div> */}

<div className="flex flex-col items-center md:items-center mt-9 md:mt-0 md:pt-57 lg:ml-20">


          {/* <h4 className="font-poppins font-normal text-[18px] leading-[27px] text-white mb-4">Follow Us On</h4> */}
          <ul className="list-none flex flex-row text-white">
          <li className="m-2 hover:text-secondary">
              <a href="https://instagram.com/djs_antariksh?igshid=MXQxZ2thMXZob3poYQ==
              " target="_blank" rel="noopener noreferrer">
                <AiFillInstagram className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://m.facebook.com/p/DJS-Antariksh-100063880216755/" target="_blank" rel="noopener noreferrer">
                <AiFillFacebook className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://twitter.com/djs_antariksh?lang=en" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://www.linkedin.com/company/djs-antariksh/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://www.youtube.com/@djsantariksh" target="_blank" rel="noopener noreferrer">
                <AiFillYoutube className="w-[30px] h-[30px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[100vw] mx-[10vw] flex flex-row justify-center md:justify-start p-0 pt-0 border-t-[1px] border-t-[#3F3E45]">
  <p className="font-poppins font-thin text-center md:text-left text-[18px] leading-[27px] text-white md:pl-[28vw]">
    Copyright Ⓒ 2024 DJS Antariksh
  </p>
</div>
    </section>
  </div>
);

export default Footer;