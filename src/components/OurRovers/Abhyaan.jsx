import React from "react";
import AbhyaanPic from "../../assets/Abhyaan.png";

const Abhyaan = () => {
  return (
    <div className="page ">
     <div className='flex justify-center mt-16 mb-2 text-3xl text-white font-meth'>Our Martian Rover</div>
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
            <p className="font-thin text-white font-poppins">
              Rover Name
            </p>
            <p className="font-light text-white font-poppins">Abhyaan</p>
          </div>

          <div className="flex flex-col mb-8 ml-20">
            <p className="font-thin text-white font-poppins">
              Competition
            </p>
            <p className="font-light text-white font-poppins">ERC</p>
          </div>

          <div className="flex flex-col mb-8 ml-20">
            <p className="font-thin text-white font-poppins">
              Weight Specifications
            </p>
            <p className="font-light text-white font-poppins">--</p>
          </div>

          <div className="flex flex-col mb-8 ml-20">
            <p className="font-thin text-white font-poppins">
              Lorem Ipsum
            </p>
            <p className="font-light text-white font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perspiciatis officiis rerum nam at eos quos ratione aliquam quisquam. Blanditiis neque praesentium molestias ut, aut dolores in quasi delectus doloribus!</p>
          </div>

          <div className="flex flex-col mb-8 ml-20">
            <p className="font-thin text-white font-poppins">
             Lorem ipsum
            </p>
            <p className="font-light text-white font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam accusantium incidunt hic cumque quos saepe voluptatibus unde est voluptates, possimus quisquam dicta! Error, autem at.</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Abhyaan;
