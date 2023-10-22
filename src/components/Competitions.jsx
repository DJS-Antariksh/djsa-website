import React from "react";
import ERC from "../assets/erc.jpg";
import IRC from "../assets/IRC.png";
import ISDC from "../assets/ISDC.jpg";
import IRDC from "../assets/IRDC.png";

const competitionsData = [
  {
    name: "European Rover Challenge(Onsite-Formula)",
    image: ERC,
    description:
      "European Rover Challenge (ERC, ERC Space & Robotics) is an annual international Martian robot competition that has been organized since 2014 in Poland. In the on-site formula, student teams from all over the world work hard to prepare a fully functional Mars rover of their design. The rover has to be a standalone, mobile platform.",
  },
  {
    name: "European Rover Challenge(Remote-Formula)",
    image: ERC,
    description:
      "European Rover Challenge (ERC, ERC Space & Robotics) is an annual international Martian robot competition that has been organized since 2014 in Poland. In the remote formula, teams taking part in the remote formula will all use standardized equipment during the competition, with which they will connect remotely via the Internet from anywhere on Earth.",
  },
  {
    name: "International Rover Challenge (IRC)",
    image: IRC,
    description:
      "International Rover Challenge (formerly Indian Rover Challenge) is an Indian space robotics engineering competition which was started in the year 2017. It challenges university students to conceptualize, design, develop, and operate an astronaut-assistive next-generation space Rover and perform specific missions in Mars simulated conditions.",
  },
  {
    name: "International Rover Design Challenge (IRDC)",
    image: IRDC,
    description:
      "International Rover Design Challenge is an online space engineering design and research-oriented competition by Space Robotics Society. Teams must carefully plan each sub-system of the Rover considering various extraterrestrial parameters in their design. This competition allows students to explore and spark the innovative design thinking of individuals, free from constraints on available physical resources.",
  },
  {
    name: "International Space Drone Challenge (ISDC)",
    image: ISDC,
    description:
      "International Space Drone Challenge is a space robotics engineering competition. It challenges university students to conceptualize, design, develop, and operate an astronaut-assistive next-generation space drone and perform specific missions in Mars simulated conditions.",
  },
];

function Competitions() {
  return (
    <div className="flex flex-col items-center">
      <div className="ml-6 md:ml-20 overflow-hidden">
        <div className="flex justify-center mt-5 md:mt-16 ml-5 md:ml-[-6%] mb-5 md:mb-12 sm:mb-10 text-[2.5%] md:text-3xl text-white font-meth component_title">
          Competitions
        </div>
        {competitionsData.map((competition, index) => (
          <div
            key={index}
            className={`flex flex-row items-center mt-2.5 md:mt-5 animate-slide-from-left ${
              index !== 0 ? `ml-[${index * 2.5}%]` : ""
            }`}
          >
            <div className="absolute flex flex-col items-center justify-center w-2.5 md:w-10 gap-2.5 md:gap-5 border border-white border-solid rounded-full">
              <img
                src={competition.image}
                alt="erc"
                className="w-[16%] md:w-[5rem] rounded-full"
              ></img>
            </div>
            <div className="ml-2.5 md:ml-9 flex flex-col w-[90%] md:w-[54rem] items-start gap-0 p-2.5 md:p-3 px-5 md:px-10 relative bg-[#ffe8a31a] rounded-2xl">
              <div className="inline-flex items-start relative flex-[0_0_auto] rounded-half">
                <div className="font-poppins relative w-[50%] md:w-fit font-light text-white lg:text-[1rem] md:text-[0.8rem] sm:text-[0.2rem] tracking-[0.05rem] md:tracking-[0.05rem] leading-[normal] md:leading-[normal] whitespace-nowrap">
                  {competition.name}
                </div>
              </div>
              <p className="font-poppins relative w-[90%] md:w-[50rem] font-extralight text-white text-[0.8rem] md:text-[0.8rem] tracking-[0.80px] md:tracking-[0.80px] leading-[normal] md:leading-[normal]">
                {competition.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Competitions;
