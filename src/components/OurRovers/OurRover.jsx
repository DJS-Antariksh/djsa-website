import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const OurRover = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
    console.log(current);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
    console.log(current);
  };

  return (
    <div id="ourRover">
      {/* <div className='flex justify-center m-16 text-3xl text-white font-meth'>Our Martian Rover</div> */}
      <div className="overflow-hidden ">
        <div
          className={` transition ease-out duration-1000`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((Component, index) => (
            <div key={index} className="w-full">
              <Component />
            </div>
          ))}
        </div>

        <div className="top-0 flex items-center justify-between w-full h-full px-10 text-3xl text-white opacity-50 ">
          <button onClick={previousSlide}>
            <BsChevronCompactLeft className="mt-[-30rem]" size={40} />
          </button>
          <button onClick={nextSlide}>
            {/* <BsFillArrowRightCircleFill /> */}
            <BsChevronCompactRight className="mt-[-30rem]" size={40} />
          </button>
        </div>

        <div className="bottom-0 mt-[-10rem] flex justify-center w-full gap-3 py-4 ">
          {slides.map((_, i) => (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRover;
