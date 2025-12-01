import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import logo from "../../assets/AntarikshLogo.png";
import bg from "../../assets/footerbg.png";
import { Link } from "react-scroll";
import {FaXTwitter} from 'react-icons/fa6';

const Footer = () => (
  <div className="relative w-full">
    <img 
      src={bg} 
      alt="footerbg" 
      className="absolute z-0 object-cover w-full h-full opacity-70"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, white)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, white)'
      }}
    />
    <section className="relative flex flex-col items-center justify-center py-6 sm:py-16 z-99">
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full mb-8 justify-center">

        <div className="flex flex-col items-center md:items-center lg:mr-20">
          <img src={logo} alt="AntarikshLogo" className="h-[90px] object-contain mb-4" />
          <p className="font-poppins font-extralight text-white text-[18px] max-w-[312px] text-center md:text-center">
            The Official Martian Rover Team of Dwarkadas J. Sanghvi College of Engineering.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-center mt-9 md:mt-0 md:pt-57 lg:ml-20">
          <ul className="list-none flex flex-row text-white">
            <li className="m-2 hover:text-secondary">
              <a href="https://instagram.com/djs_antariksh?igshid=MXQxZ2thMXZob3poYQ==" target="_blank" rel="noopener noreferrer">
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

      <div className="w-full flex flex-row justify-center p-0 pt-0">
        <p className="font-poppins font-thin text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2024 DJS Antariksh
        </p>
      </div>
    </section>
  </div>
);

export default Footer;