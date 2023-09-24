import React, { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const OurRover = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0)
    setCurrent(slides.length - 1);
    else setCurrent(current - 1);
    console.log(current)
  };

  const nextSlide = () => {
    if (current === slides.length - 1) 
    setCurrent(0);
    else setCurrent(current + 1);
    console.log(current)
  };

  return (
    <>
      {/* <div className='font-meth text-white text-3xl flex justify-center m-16'>Our Martian Rover</div> */}
      <div className="overflow-hidden ">
        <div
          className={` transition ease-out duration-1000`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((Component, index) => (
            <div key={index} className="w-full">
              <Component/>
            </div>
          ))}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white opacity-50 px-10 text-3xl">
          <button onClick={previousSlide}>
          <BsChevronCompactLeft  size={40} />
          </button>
          <button onClick={nextSlide}>
            {/* <BsFillArrowRightCircleFill /> */}
            <BsChevronCompactRight  size={40} />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
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
    </>
  );
};

export default OurRover;




