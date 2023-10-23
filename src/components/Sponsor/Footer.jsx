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
    <section className="flex flex-col items-center justify-center py-6 sm:py-16 z-99 relative">
      <div className="relative z-10 w-full flex flex-row justify-evenly items-start md:flex-row mb-8">
        <div className="flex-[1] sm:px-16 px-6 text-white flex flex-col justify-start mr-10">
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
                to="home" // Replace with the actual link for the Home section
                spy={true}
                smooth={true}
                duration={500}
                className="font-extralight text-white font-poppins hover:text-gray-500 hover:decoration-white/30 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="about" // Replace with the actual link for the About Us section
                spy={true}
                smooth={true}
                duration={500}
                className="font-extralight text-white font-poppins hover:text-gray-500 hover:decoration-white/30 cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="achievements" // Replace with the actual link for the Achievements section
                spy={true}
                smooth={true}
                duration={500}
                className="font-extralight text-white font-poppins hover:text-gray-500 hover:decoration-white/30 cursor-pointer"
              >
                Achievements
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="contactUs" // Replace with the actual link for the Contact Us section
                spy={true}
                smooth={true}
                duration={500}
                className="font-extralight text-white font-poppins hover:text-gray-500 hover:decoration-white/30 cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="sponsor" // Replace with the actual link for the Sponsor section
                spy={true}
                smooth={true}
                duration={500}
                className="font-extralight text-white font-poppins hover:text-gray-500 hover:decoration-white/30 cursor-pointer"
              >
                Sponsor
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col relative ss:my-0 my-4 min-w-[15rem]">
          <h4 className="font-poppins font-normal text-[18px] leading-[27px] text-white">About the Team</h4>
          <ul className="list-none mt-4 font-poppins font-extralight text-[16px] leading-[24px] text-white">
            <li className="mt-4 hover:text-secondary">
              <Link
                to="ourRover" // Replace with the actual link for the Our Rover section
                spy={true}
                smooth={true}
                duration={500}
                className="font-extralight text-white font-poppins hover:text-gray-500 hover:decoration-white/30 cursor-pointer"
              >
                Our Rover
              </Link>
            </li>
            <li className="mt-4 hover:text-secondary">
              <Link
                to="department" // Replace with the actual link for the Department section
                spy={true}
                smooth={true}
                duration={500}
                className="font-extralight text-white font-poppins hover:text-gray-500 hover:decoration-white/30 cursor-pointer"
              >
                Department
              </Link>
            </li>
            <li className="mt-4 hover:text-secondary">
              <Link
                to="core" // Replace with the actual link for the Core section
                spy={true}
                smooth={true}
                duration={500}
                className="font-extralight text-white font-poppins hover:text-gray-500 hover:decoration-white/30 cursor-pointer"
              >
                Core
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex relative flex-col ss:my-0  sm:px-10 my-4 min-w-[5rem] mr-12">
          <h4 className="font-poppins font-normal text-[18px] leading-[27px] text-white">Follow Us On</h4>
          <ul className="list-none flex flex-row mt-4 font-poppins font-normal text-[16px] leading-[24px] text-white">
            <li className="m-2 hover:text-secondary">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <AiFillFacebook className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="w-[30px] h-[30px]" />
              </a>
            </li>
            <li className="m-2 hover:text-secondary">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
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
