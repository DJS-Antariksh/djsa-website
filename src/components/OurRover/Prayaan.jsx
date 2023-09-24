import React from "react";
import PrayaanPic from "./Prayaan.png";
import AbhyaanPic from "./Abhyaan.png";
// mt-16
const Prayaan = () => {
  return (
    <div className="page w-full   mt-[-720px] ml-[1520px]">
     <div className='font-meth text-white text-3xl flex justify-center mt-16 mb-2'>Our Martian Rover</div>
      <div className="flex flex-row">
        <div>
          <img
            className=" mt-[-480px] hover:translate-x-2 hover:translate-y-1 transition-all duration-1000 "
            src={PrayaanPic}
          ></img>
        </div>

        <div className="w-1/3 ml-[-180px] ">
          <div className="flex flex-col mt-16 mb-8">
            <p className="font-poppins font-thin text-white">
              Rover Name
            </p>
            <p className="font-poppins font-light text-white">Prayaan</p>
          </div>

          <div className="flex flex-col mb-8">
            <p className="font-poppins font-thin text-white">
              Competition
            </p>
            <p className="font-poppins font-light text-white">ERC</p>
          </div>

          <div className="flex flex-col  mb-8">
            <p className="font-poppins font-thin text-white">
              Weight Specifications
            </p>
            <p className="font-poppins font-light text-white">--</p>
          </div>

          <div className="flex flex-col mb-8">
            <p className="font-poppins font-thin text-white">
              Lorem Ipsum
            </p>
            <p className="font-poppins font-light text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perspiciatis officiis rerum nam at eos quos ratione aliquam quisquam. Blanditiis neque praesentium molestias ut, aut dolores in quasi delectus doloribus!</p>
          </div>

          <div className="flex flex-col mb-8">
            <p className="font-poppins font-thin text-white">
             Lorem ipsum
            </p>
            <p className="font-poppins font-light text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam accusantium incidunt hic cumque quos saepe voluptatibus unde est voluptates, possimus quisquam dicta! </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Prayaan;