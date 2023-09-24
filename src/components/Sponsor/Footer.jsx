import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import logo from "../../assets/AntarikshLogo.png";
import bg from "../../assets/footerbg.png";


const Footer = () => (
  <>
  <div>
  <img
          src={bg}
            alt="footerbg"
            className="absolute z-0 object-contain w-full h-max"
            />
  <section
    className="flex flex-col items-center justify-center py-6 sm:py-16 z-99">

      <div className={`flex flex-row justify-evenly items-start md:flex-row mb-8  z-99 w-full`}>
        
        <div className="flex-[1] sm:px-16 px-6 text-white flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="AntarikshLogo"
            className="w-[266px] h-[90px] relative object-contain"
          />
          <p
            className={`font-poppins relative font-extralight text-white text-[18px] z-99 ml-10 leading-[30.8px] mt-4 max-w-[312px]`}
          >
            The official Rover challenge team of Dwarkadas J. Sanghvi College of
            Engineering.
          </p>
        </div>

          <div className="flex flex-col ss:my-0 my-4 min-w-[300px]">
            <h4 className="font-poppins relative font-normal text-[18px] leading-[27px] text-white">
              Useful Links
            </h4>
            <ul className="list-none mt-4 font-poppins relative font-extralight text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer">
              <li className="mt-4">Home</li>
              <li className="mt-4">About Us</li>
              <li className="mt-4">Achievements</li>
              <li className="mt-4">Contact Us</li>
              <li className="mt-4">Sponsors</li>
            </ul>
          </div>
     
        <div className={`flex flex-col relative ss:my-0 my-4 min-w-[300px]`}>
          <h4 className="font-poppins font-normal text-[18px] leading-[27px] text-white">
            About the Team
          </h4>
          <ul className="list-none mt-4 font-poppins font-extralight text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer">
            <li className="mt-4">Our Rover</li>
            <li className="mt-4"> Departments</li>
            <li className="mt-4">Core</li>
          </ul>
        </div>

          <div className={`flex relative flex-col ss:my-0  sm:px-16 my-4 min-w-[200px] mr-12`}>
            <h4 className="font-poppins font-normal text-[18px] leading-[27px] text-white">
              Follow Us On
            </h4>
            <ul className="list-none flex flex-row mt-4 font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer">
              <li className="m-2">
                <AiFillInstagram className=" w-[30px] h-[100px]" />
              </li>
              <li className="m-2">
                <AiFillFacebook className=" w-[30px] h-[100px]" />
              </li>
              <li className="m-2">
                <AiOutlineTwitter className=" w-[30px] h-[100px]" />
              </li>
              <li className="m-2">
                <AiFillLinkedin className=" w-[30px] h-[100px]" />
              </li>
              <li className="m-2">
                <AiFillYoutube className=" w-[30px] h-[100px]" />
              </li>
            </ul>
          </div>

 
      </div>
  
    <div className="w-full flex justify-between relative items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-thin text-center text-[18px] ml-24 leading-[27px] text-white">
        Copyright Ⓒ 2023 DJS Antariksh
      </p>

    </div>
  </section>
  
  </div>
 
  </>
 
);

export default Footer;
