import React from "react";
import solidworks from "../../assets/solidworks.png";
import WOL from "../../assets/wol.png";
import PA from "../../assets/PA.png";
import PBC from "../../assets/PBC.jpg";
import ANYSYS from "../../assets/ansys-logo.jpg";
import spectra from "../../assets/spectra.jpeg"
import tesseract from "../../assets/tesseract.png"
// import seshasai from "../../assets/SESHASAI-LOGO.png"



const Sponsor = () => {
  return (
    <div id="sponsor">
      <div className="mt-[-4rem]">
        <div className="flex justify-center mt-16 mb-2 text-3xl text-white font-meth component_title">
          Sponsors
        </div>
        <div className="flex flex-wrap justify-center">
          <img className="m-12 w-[20%] h-[5rem] sm:h-[10rem]" src={solidworks} alt="sponsor img"></img>
          <img className="m-12 w-[20%] h-[5rem] sm:h-[10rem]" src={PA} alt="sponsor img"></img>
          <img className="m-12 w-[20%] h-[5rem] sm:h-[10rem]" src={PBC} alt="sponsor img"></img>
          <img className="m-12 w-[20%] h-[5rem] sm:h-[10rem]" src={ANYSYS} alt="sponsor img"></img>
          <img className="m-12 w-[20%] h-[5rem] sm:h-[10rem]" src={spectra} alt="sponsor img"></img>
          <img className="m-12 w-[20%] h-[5rem] sm:h-[10rem]" src={tesseract} alt="sponsor img"></img>
          {/* <img className="m-12 w-[20%] h-[5rem] sm:h-[10rem]" src={seshasai} alt="sponsor img"></img> */}


          {/* <img className='m-12' src={solidworks} alt='sponsor img'>
</img>
<img className='m-12' src={solidworks} alt='sponsor img'>
</img>
<img className='m-12' src={solidworks} alt='sponsor img'>
</img> */}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
