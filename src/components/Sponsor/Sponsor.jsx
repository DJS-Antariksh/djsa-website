import React from "react";

const Sponsor = () => {
  const sponsors = [
    "/sponsors2026/2.png",
    "/sponsors2026/3.png",
    "/sponsors2026/4.png",
    "/sponsors2026/5.png",
    "/sponsors2026/6.png",
    "/sponsors2026/7.png",
  ];

  return (
    <div id="sponsor">
      <div className="mt-[-4rem]">
        <div className="flex justify-center mt-16 mb-2 text-3xl text-white font-meth component_title">
          Sponsors
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {sponsors.map((src, index) => (
            <img
              key={index}
              className="m-12 w-[20%] h-[5rem] sm:h-[10rem] object-contain rounded-[5%] transition-all duration-300 hover:scale-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
              src={src}
              alt={`sponsor ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
