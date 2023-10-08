import React from "react";
import erclogo from "../assets/erc.jpg";

const competitionsData = [
  {
    name: "European Rover Challenge(Onsite-Formula)",
    description:
      "European Rover Challenge (ERC, ERC Space & Robotics) is an annual international Martian robot competition that has been organized since 2014 in Poland. In the on-site formula, student teams from all over the world work hard to prepare a fully functional Mars rover of their design. The rover has to be a standalone, mobile platform.",
  },
  {
    name: "European Rover Challenge(Remote-Formula)",
    description:
      "European Rover Challenge (ERC, ERC Space & Robotics) is an annual international Martian robot competition that has been organized since 2014 in Poland. In the remote formula, teams taking part in the remote formula will all use standardized equipment during the competition, with which they will connect remotely via the Internet from anywhere on Earth.",
  },
  {
    name: "International Rover Challenge (IRC)",
    description:
      "International Rover Challenge (formerly Indian Rover Challenge) is an Indian space robotics engineering competition which was started in the year 2017. It challenges university students to conceptualize, design, develop and operate an astronaut-assistive next-generation space Rover and perform specific missions in Mars simulated conditions.",
  },
  {
    name: "International Rover Design Challenge (IRDC)",
    description:
      "International Rover Design Challenge is an online space engineering design and research-oriented competition by Space Robotics Society. Teams must carefully plan each sub-system of the Rover considering various extra-terrestrial parameters in their design. This competition allows students to explore and spark the innovative design thinking of individuals, free from constraints on available physical resources.",
  },
  {
    name: "International Space Drone Challenge (ISDC)",
    description:
      "International Space Drone Challenge is a space robotics engineering competition. It challenges university students to conceptualize, design, develop and operate an astronaut-assistive next-generation space drone and perform specific missions in Mars simulated conditions.",
  },
];

function Competitions() {
  return (
    <div>
      <div className="ml-20">
        <div className="flex justify-center mt-16 ml-[-45px] mb-12 text-3xl text-white font-meth">
          Competitions
        </div>
        {competitionsData.map((competition, index) => (
          <div
            key={index}
            className={`flex flex-row items-center mt-5 animate-slide-from-left ${
              index !== 0 ? `ml-[${index * 7.5}rem]` : ""
            }`}
          >
            <div className="absolute flex flex-col items-center justify-center w-10 gap-5 border border-white border-solid rounded-full">
              <img
                src={erclogo}
                alt="erc"
                className="w-[5rem] rounded-full"
              ></img>
            </div>
            <div className="ml-9 flex flex-col w-[54rem] items-start gap-0  p-3 px-10 relative bg-[#ffe8a31a] rounded-2xl">
              <div className="inline-flex items-start relative flex-[0_0_auto] rounded-half">
                <div className="font-poppins relative w-fit font-light text-white text-[1rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
                  {competition.name}
                </div>
              </div>
              <p className="font-poppins relative w-[50rem] font-extralight text-white text-[0.8rem] tracking-[0.80px] leading-[normal]">
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
