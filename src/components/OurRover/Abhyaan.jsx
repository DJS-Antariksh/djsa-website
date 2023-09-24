import React from "react";
import AbhyaanPic from "./Abhyaan.png";

const Abhyaan = () => {
  return (
    <div className="page ">
     <div className='font-meth text-white text-3xl flex justify-center mt-16 mb-2'>Our Martian Rover</div>
      <div className="flex flex-row  ">
        <div>
          <img
            className=" ml-64 mt-8 hover:translate-x-2 hover:translate-y-1 transition-all duration-1000 rotate-5"
            src={AbhyaanPic}
          ></img>
        </div>

        <div className="w-2/5">
          <div className="flex flex-col mt-16 ml-20 mb-8">
            <p className="font-poppins font-thin text-white">
              Rover Name
            </p>
            <p className="font-poppins font-light text-white">Abhyaan</p>
          </div>

          <div className="flex flex-col ml-20 mb-8">
            <p className="font-poppins font-thin text-white">
              Competition
            </p>
            <p className="font-poppins font-light text-white">ERC</p>
          </div>

          <div className="flex flex-col ml-20 mb-8">
            <p className="font-poppins font-thin text-white">
              Weight Specifications
            </p>
            <p className="font-poppins font-light text-white">--</p>
          </div>

          <div className="flex flex-col ml-20 mb-8">
            <p className="font-poppins font-thin text-white">
              Lorem Ipsum
            </p>
            <p className="font-poppins font-light text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perspiciatis officiis rerum nam at eos quos ratione aliquam quisquam. Blanditiis neque praesentium molestias ut, aut dolores in quasi delectus doloribus!</p>
          </div>

          <div className="flex flex-col ml-20 mb-8">
            <p className="font-poppins font-thin text-white">
             Lorem ipsum
            </p>
            <p className="font-poppins font-light text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam accusantium incidunt hic cumque quos saepe voluptatibus unde est voluptates, possimus quisquam dicta! Error, autem at.</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Abhyaan;
