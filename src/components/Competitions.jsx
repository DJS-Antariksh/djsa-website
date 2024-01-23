import React from "react";
import ERC from "../assets/ERC.jpg";
import IRC from "../assets/IRC.png";
import ISDC from "../assets/ISDC.jpg";
import IRDC from "../assets/IRDC.png";
import { Link } from "react-router-dom";

const competitionsData = [
  {
    name: "European Rover Challenge (Onsite-Formula)",
    image: ERC,
    description:
      "European Rover Challenge is an annual international Martian Rover competition. In the on-site formula, student teams from all over the world work hard to prepare a fully functional Mars rover of their design.",
    routePath: "/",
  },
  {
    name: "European Rover Challenge (Remote-Formula)",
    image: ERC,
    description:
      "European Rover Challenge (ERC, ERC Space & Robotics) is an annual international Martian robot competition that has been organized since 2014 in Poland. In the remote formula, teams taking part in the remote formula will all use standardized equipment during the competition.",
    routePath: "/",
  },
  {
    name: "International Rover Challenge (IRC)",
    image: IRC,
    description:
      "International Rover Challenge (formerly Indian Rover Challenge) is an Indian space robotics engineering competition which was started in the year 2017. It challenges university students to conceptualize, design, develop and operate an astronaut-assistive next-generation space Rover and perform specific missions in Mars simulated conditions.",
    routePath: "/irc",
  },
  {
    name: "International Rover Design Challenge (IRDC)",
    image: IRDC,
    description:
      "International Rover Design Challenge is an online space engineering design and research-oriented competition by Space Robotics Society. Teams must carefully plan each sub-system of the Rover considering various extra-terrestrial parameters in their design.",
    routePath: "/",
  },
  {
    name: "International Space Drone Challenge (ISDC)",
    image: ISDC,
    description:
      "International Space Drone Challenge is a space robotics engineering competition. It challenges university students to conceptualize, design, develop and operate an astronaut-assistive next-generation space drone and perform specific missions in Mars simulated conditions.",
    routePath: "/",
  },
  // Add more competitions here...
];

function Competitions() {
  return (
    <div className="flex justify-center items-center mb-[7rem]">
      <div className="ml-[-10rem] lg:ml-20">
        <div className="flex justify-center mt-16 ml-[2rem] lg:ml-[-18rem] mb-12 text-3xl text-white font-meth component_title">
          Competitions
        </div>
        <div className="flex flex-row items-center mt-5 animate-slide-from-left ml-[-7rem] lg:ml-[-20rem]">
          <div className="absolute sm:flex flex-col items-center justify-center ml-[-10rem] sm:ml-0 w-10 gap-5 border border-white border-solid rounded-full">
            <img
              src={competitionsData[0].image}
              alt="erc"
              className="w-[5rem] rounded-full"
            ></img>
          </div>
          <div className="ml-[29%] sm:ml-[7%] flex flex-col justify-center w-[25rem] md:w-[54rem] sm:w-[54rem] items-start gap-0 p-3 px-10 relative bg-[#ffe8a31a] rounded-2xl">
            <div className="inline-flex items-start relative flex-[0_0_auto] rounded-half">
            
              <div className="font-poppins relative w-fit font-light text-white text-[0.9rem] sm:text-[1rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
                {competitionsData[0].name}
              </div>
            </div>
            <p className="font-poppins relative w-full sm:w-[50rem] font-extralight text-white text-[0.8rem] tracking-[0.80px] leading-[normal]">
              {competitionsData[0].description}
            </p>
          </div>
        </div>

        {/* Second Set of Competitions */}
        <div className="flex flex-row items-center mt-5 animate-slide-from-left ml-[-7rem] lg:ml-[-12.5rem]">
          <div className="absolute sm:flex flex-col items-center justify-center ml-[-10rem] sm:ml-0 w-10 gap-5 border border-white border-solid rounded-full">
            <img
              src={competitionsData[1].image}
              alt="erc"
              className="w-[5rem] rounded-full"
            ></img>
          </div>
          <div className="ml-[29%] sm:ml-[7%] flex flex-col justify-center w-[25rem] md:w-[54rem] sm:w-[54rem] items-start gap-0 p-3 px-10 relative bg-[#ffe8a31a] rounded-2xl">
            <div className="inline-flex items-start relative flex-[0_0_auto] rounded-half">
              <div className="font-poppins relative w-fit font-light text-white text-[0.9rem] sm:text-[1rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
                {competitionsData[1].name}
              </div>
            </div>
            <p className="font-poppins relative w-full sm:w-[50rem] font-extralight text-white text-[0.8rem] tracking-[0.80px] leading-[normal]">
              {competitionsData[1].description}
            </p>
          </div>
        </div>
        
        <div className="flex flex-row items-center mt-5 animate-slide-from-left ml-[-7rem] lg:ml-[-5rem]">
          <div className="absolute sm:flex flex-col items-center justify-center ml-[-10rem] sm:ml-0 w-10 gap-5 border border-white border-solid rounded-full">
            <img
              src={competitionsData[2].image}
              alt="erc"
              className="w-[5rem] rounded-full"
            ></img>
          </div>
          
          
          <div className="ml-[29%] sm:ml-[7%] flex flex-col justify-center w-[35rem] md:w-[54rem] sm:w-[54rem] items-start gap-0 p-3 px-10 relative bg-[#ffe8a31a] rounded-2xl">
          <div className="flex items-start relative">
  <Link to={`/irc`} className="flex items-start"> {/* Added flex class */}
    <div className="font-poppins relative font-light text-white text-[1rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
      {competitionsData[2].name}
    </div>
  </Link>
  <a href="/irc" className="ml-4"> {/* Added ml-4 for margin */}
  <button className="bg-blue-500  text-white p-1.5 rounded-full  no-underline inline-block text-sm cursor-pointer">
  Link Here
</button>

  </a>
</div>

            <p className="font-poppins relative w-full sm:w-[50rem] font-extralight text-white text-[0.8rem] tracking-[0.80px] leading-[normal]">
              {competitionsData[2].description}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center mt-5 animate-slide-from-left ml-[-7rem] lg:ml-[2.5rem]">
          <div className="absolute sm:flex flex-col items-center justify-center ml-[-10rem] sm:ml-0 w-10 gap-5 border border-white border-solid rounded-full">
            <img
              src={competitionsData[3].image}
              alt="erc"
              className="w-[5rem] rounded-full"
            ></img>
          </div>
          <div className="ml-[29%] sm:ml-[7%] flex flex-col justify-center w-[25rem] md:w-[54rem] sm:w-[54rem] items-start gap-0 p-3 px-10 relative bg-[#ffe8a31a] rounded-2xl">
            <div className="inline-flex items-start relative flex-[0_0_auto] rounded-half">
              <div className="font-poppins relative w-fit font-light text-white text-[0.9rem] sm:text-[1rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
                {competitionsData[3].name}
              </div>
            </div>
            <p className="font-poppins relative w-full sm:w-[50rem] font-extralight text-white text-[0.8rem] tracking-[0.80px] leading-[normal]">
              {competitionsData[3].description}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center mt-5 animate-slide-from-left ml-[-7rem] lg:ml-[10rem]">
          <div className="absolute sm:flex flex-col items-center justify-center ml-[-10rem] sm:ml-0 w-10 gap-5 border border-white border-solid rounded-full">
            <img
              src={competitionsData[4].image}
              alt="erc"
              className="w-[5rem] rounded-full"
            ></img>
          </div>
          <div className="ml-[29%] sm:ml-[7%] flex flex-col justify-center w-[26rem] md:w-[54rem] sm:w-[54rem] items-start gap-0 p-3 px-10 relative bg-[#ffe8a31a] rounded-2xl">
            <div className="inline-flex items-start relative flex-[0_0_auto] rounded-half">
              <div className="font-poppins relative w-fit font-light text-white text-[0.9rem] sm:text-[1rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
                {competitionsData[4].name}
              </div>
            </div>
            <p className="font-poppins relative w-full sm:w-[50rem] font-extralight text-white text-[0.8rem] tracking-[0.80px] leading-[normal]">
              {competitionsData[4].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competitions;
