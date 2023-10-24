import React from "react";
import solidworks from "../../assets/solidworks.png";
import WOL from "../../assets/wol.png";
import PA from "../../assets/PA.png";
import PBC from "../../assets/PBC.jpg";
import ANYSYS from "../../assets/ANSYS.png";

const Sponsor = () => {
  return (
    <div id="sponsor">
      <div className="mt-[-4rem]">
        <div className="flex justify-center mt-16 mb-2 text-3xl text-white font-meth component_title">
          Sponsors
        </div>
        <div className="flex flex-wrap justify-center">
          <img className="m-12 w-[28%] h-[8%]" src={solidworks} alt="sponsor img"></img>
          <img className="m-12 w-[28%] h-[8%]" src={WOL} alt="sponsor img"></img>
          <img className="m-12 w-[28%] h-[8%]" src={PA} alt="sponsor img"></img>
          <img className="m-12 w-[28%] h-[12rem]" src={PBC} alt="sponsor img"></img>
          <img className="m-12 w-[28%] h-[8%]" src={ANYSYS} alt="sponsor img"></img>
          <img className="m-12 w-[28%] h-[8%]" src={solidworks} alt="sponsor img"></img>
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
