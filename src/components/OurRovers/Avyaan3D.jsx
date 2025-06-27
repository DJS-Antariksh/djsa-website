import Avyaan from "../../assets/Avyaan.png"

function Avyaan3D() {
  return (
    <>
      <div className="flex justify-center mt-8 text-3xl text-white font-meth component_title">
        Our Rover
      </div>
      <div className="flex justify-center">
        <div className="h-100 mt-20 lg:mr-5 md:mr-5 flex items-center justify-center overflow-hidden">
          <img 
            src={Avyaan} 
            alt="Avyaan" 
            style={{objectFit: 'contain', transform: 'scale(1'}}
            className="-mt-[20%]"
          />
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col mt-16 mb-8">
            <p className="font-thin text-white font-poppins">Rover Name</p>
            <p className="font-light text-white font-poppins">Avyaan</p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="font-thin text-white font-poppins">Dimension</p>
            <p className="font-light text-white font-poppins">
              1140mm X 885mm
            </p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="font-thin text-white font-poppins">
              Weight Specifications
            </p>
            <p className="font-light text-white font-poppins">75 kgs</p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="font-thin text-white font-poppins">Visual system</p>
            <p className="font-light text-white font-poppins">
              ZED2, Intel Depth camera, Logitech camera
            </p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="font-thin text-white font-poppins">Max Speed</p>
            <p className="font-light text-white font-poppins">1m/s</p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="font-thin text-white font-poppins">USP</p>
            <p className="font-light text-white font-poppins">
              Four Wheel Independent Steering System, Can climb inclination of 60 degree
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Avyaan3D;