import React from "react";

const Sponsor = () => {
  const sponsors = [
    "/sponsors2026/2.png",
    "/sponsors2026/3.png", // PCB Power
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

        {/* GRID instead of flex */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {sponsors.map((src, index) => {
            const image = (
              <img
                className="m-12 w-[220px] h-[120px] object-contain rounded-[5%] transition-all duration-300 hover:scale-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] cursor-pointer"
                src={src}
                alt={`sponsor ${index + 1}`}
              />
            );

            // Only PCB Power clickable
            if (index === 1) {
              return (
                <a
                  key={index}
                  href="https://www.pcbpower.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image}
                </a>
              );
            }

            return <div key={index}>{image}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
