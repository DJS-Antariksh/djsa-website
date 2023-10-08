import React from "react";
import AbhyaanPic from "../../assets/Abhyaan.png";

const Abhyaan = () => {
  return (
    <div className="page ">
      <div className="flex justify-center mt-16 mb-2 text-3xl text-white font-meth">
        Our Martian Rover
      </div>
      <div className="flex flex-row ">
        <div>
          <img
            className="mt-8 ml-64 transition-all duration-1000 hover:translate-x-2 hover:translate-y-1 rotate-5"
            src={AbhyaanPic}
            alt="abhyan"
          ></img>
        </div>

        <div className="w-2/5">
          <div className="flex flex-col mt-16 mb-8 ml-20">
            <p className="font-thin text-white font-poppins">Rover Name</p>
            <p className="font-light text-white font-poppins">Abhyaan</p>
          </div>

          <div className="flex flex-col mb-8 ml-20">
            <p className="font-thin text-white font-poppins">Dimension</p>
            <p className="font-light text-white font-poppins">
              1056.83mm X 816.6mm
            </p>
          </div>

          <div className="flex flex-col mb-8 ml-20">
            <p className="font-thin text-white font-poppins">
              Weight Specifications
            </p>
            <p className="font-light text-white font-poppins"> 59 kgs</p>
          </div>
          <div className="flex flex-col mb-8 ml-20">
            <p className="font-thin text-white font-poppins">Visual system</p>
            <p className="font-light text-white font-poppins">
              {" "}
              zed2, Intel depth camera, Logitech camera
            </p>
          </div>
          <div className="flex flex-col mb-8 ml-20">
            <p className="font-thin text-white font-poppins">Max Speed</p>
            <p className="font-light text-white font-poppins">1m/s</p>
          </div>

          <div className="flex flex-col mb-8 ml-20">
            <p className="font-thin text-white font-poppins">USP</p>
            <p className="font-light text-white font-poppins">
              Double rocker suspension system Can climb inclination of 60 degree
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abhyaan;
