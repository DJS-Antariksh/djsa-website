import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import logo from "../../assets/AntarikshLogo.png";
import bg from "../../assets/footerbg.png";
import { Link } from "react-scroll";

const Footer = () => (
  <div className="relative">
    <img src={bg} alt="footerbg" className="absolute z-0 object-cover w-full h-[30rem]" />
    <section className="relative flex flex-col items-center justify-center py-6 sm:py-16 z-99">
      <div className="relative z-10 flex flex-row items-start w-full mb-8 justify-evenly md:flex-row">
        <div className="hidden md:flex-[1] sm:px-16 px-6 text-white md:flex flex-col justify-start mr-10">
          <img src={logo} alt="AntarikshLogo" className="w-[266px] h-[90px] relative object-contain" />
          <p className="font-poppins relative font-extralight text-white text-[18px] z-99 ml-10 leading-[30.8px] mt-4 max-w-[312px]">
            The official Rover challenge team of Dwarkadas J. Sanghvi College of Engineering.
          </p>
        </div>

        <div className="hidden md:flex flex-col ss:my-0 my-4 min-w-[350px]">
          <h4 className="font-poppins relative font-normal text-[18px] leading-[27px] text-white">Useful Links</h4>
          <ul className="list-none mt-4 font-poppins relative text-[16px] leading-[24px] text-white">
            <li className="mt-4">
              <Link
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer font-extralight font-poppins hover:text-gray-500 hover:decoration-white/30"
              >
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
        </div>

        <div className="hidden md:flex flex-col relative ss:my-0 my-4 min-w-[15rem]">
          <h4 className="font-poppins font-normal text-[18px] leading-[27px] text-white">About the Team</h4>
          <ul className="list-none mt-4 font-poppins font-extralight text-[16px] leading-[24px] text-white">
            <li className="mt-4 hover:text-secondary">
              <Link
                to="ourRover"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer font-extralight font-poppins hover:text-gray-500 hover:decoration-white/30"
              >
                Our Rover
              </Link>
            </li>
            <li className="mt-4 hover:text-secondary">
              <Link
                to="department"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer font-extralight font-poppins hover:text-gray-500 hover:decoration-white/30"
              >
                Department
              </Link>
            </li>
            <li className="mt-4 hover:text-secondary">
              <Link
                to="core" 
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer font-extralight font-poppins hover:text-gray-500 hover:decoration-white/30"
              >
                Core
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex relative flex-col ss:my-0  sm:px-10 my-4 min-w-[3rem] ml-[45%] sm:ml-0">
          <h4 className="hidden sm:block font-poppins font-normal text-[18px] leading-[27px] text-white ml-0">Follow Us On</h4>
          <ul className="list-none flex flex-row mt-4 font-poppins font-normal text-[16px] leading-[24px] text-white">
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
                <AiOutlineTwitter className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://www.linkedin.com/company/djs-antariksh/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://youtube.com/@djsantariksh9095?si=YVUA4NdSvCpViWYG" target="_blank" rel="noopener noreferrer">
                <AiFillYoutube className="w-[30px] h-[30px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-between relative items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-thin text-center text-[18px] ml-24 leading-[27px] text-white">Copyright Ⓒ 2023 DJS Antariksh</p>
      </div>
    </section>
  </div>
);

export default Footer;
