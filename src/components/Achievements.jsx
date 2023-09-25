import React, { useState,useEffect } from "react";
import videoBg from "../assets/valo.mp4"

function Achievements() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    // Simulate the video ending after a certain time (e.g., 5 seconds)
    const videoDuration = 50000; // 5 seconds
    const timer = setTimeout(() => {
      setIsVideoPlaying(false);
    }, videoDuration);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
<div className="mt-[6rem]">
{isVideoPlaying ? (
        <div className="w-screen h-screen mt-8">
          <video
            muted
            autoPlay
            src={videoBg}
            type="video/mp4"
            onEnded={() => setIsVideoPlaying(false)}
            className="object-cover w-full h-full"
          >
          </video>
        </div>
      ) : (
<div className="ml-20">
<div className="flex flex-row items-center mt-5 animate-slide-from-left">
  <div className="absolute flex flex-col items-center justify-center w-14 gap-5 p-2 border border-white border-solid rounded-[6rem] ">
    <div className="relative w-fit mt-[-5] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[32px] tracking-[1.60px] leading-[normal]">
      1
    </div>
  </div>  
  <div className="ml-9 flex flex-col w-[55rem] items-start gap-0 px-10 p-3 pb-0 relative bg-[#ffe8a31a] rounded-2xl">
    <div className="inline-flex items-start relative flex-[0_0_auto]">
      <div className="font-meth relative w-fit font-bold text-white text-[1.3rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
        Achievements
      </div>
    </div>
    <p className="font-poppins relative w-[50rem]  font-normal text-white text-[1rem] tracking-[0.80px] leading-[normal]">
      Interested individuals fill out an application form expressing their preference for the &#34;Red Planet Express&#34; option.
    </p>
  </div>
</div>


<div className="flex flex-row items-center mt-5 ml-[7.5rem] animate-slide-from-left">
  <div className="absolute flex flex-col items-center justify-center w-14 gap-5 p-2 border border-white border-solid rounded-[6rem] ">
    <div className="relative w-fit mt-[-5] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[32px] tracking-[1.60px] leading-[normal]">
      2
    </div>
  </div>
  <div className="ml-9 flex flex-col w-[55rem] items-start gap-0 px-10 p-3 pb-0 relative bg-[#ffe8a31a] rounded-2xl">
    <div className="inline-flex items-start relative flex-[0_0_auto]">
      <div className="font-meth relative w-fit font-bold text-white text-[1.3rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
        Achievements
      </div>
    </div>
    <p className="font-poppins relative w-[50rem]  font-normal text-white text-[1rem] tracking-[0.80px] leading-[normal]">
      Interested individuals fill out an application form expressing their preference for the &#34;Red Planet Express&#34; option.
    </p>
  </div>
</div>

<div className="flex flex-row items-center mt-5 ml-[15rem] animate-slide-from-left">
  <div className="absolute flex flex-col items-center justify-center w-14 gap-5 p-2 border border-white border-solid rounded-[6rem] ">
    <div className="relative w-fit mt-[-5] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[32px] tracking-[1.60px] leading-[normal]">
      3
    </div>
  </div>
  <div className="ml-9 flex flex-col w-[55rem] items-start gap-0 px-10 p-3 pb-0 relative bg-[#ffe8a31a] rounded-2xl">
    <div className="inline-flex items-start relative flex-[0_0_auto]">
      <div className="font-meth relative w-fit font-bold text-white text-[1.3rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
        Achievements
      </div>
    </div>
    <p className="font-poppins relative w-[50rem]  font-normal text-white text-[1rem] tracking-[0.80px] leading-[normal]">
      Interested individuals fill out an application form expressing their preference for the &#34;Red Planet Express&#34; option.
    </p>
  </div>
</div>

<div className="flex flex-row items-center mt-5 ml-[22.5rem] animate-slide-from-left">
  <div className="absolute flex flex-col items-center justify-center w-14 gap-5 p-2 border border-white border-solid rounded-[6rem] ">
    <div className="relative w-fit mt-[-5] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[32px] tracking-[1.60px] leading-[normal]">
      4
    </div>
  </div>
  <div className="ml-9 flex flex-col w-[55rem] items-start gap-0 px-10 p-3 pb-0 relative bg-[#ffe8a31a] rounded-2xl">
    <div className="inline-flex items-start relative flex-[0_0_auto]">
      <div className="font-meth relative w-fit font-bold text-white text-[1.3rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
        Achievements
      </div>
    </div>
    <p className="font-poppins relative w-[50rem]  font-normal text-white text-[1rem] tracking-[0.80px] leading-[normal]">
      Interested individuals fill out an application form expressing their preference for the &#34;Red Planet Express&#34; option.
    </p>
  </div>
</div>

<div className="flex flex-row items-center mt-5 ml-[30rem] animate-slide-from-left">
  <div className="absolute flex flex-col items-center justify-center w-14 gap-5 p-2 border border-white border-solid rounded-[6rem] ">
    <div className="relative w-fit mt-[-5] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[32px] tracking-[1.60px] leading-[normal]">
      5
    </div>
  </div>
  <div className="ml-9 flex flex-col w-[55rem] items-start gap-0 px-10 p-3 pb-0 relative bg-[#ffe8a31a] rounded-2xl">
    <div className="inline-flex items-start relative flex-[0_0_auto]">
      <div className="font-meth relative w-fit font-bold text-white text-[1.3rem] tracking-[0.05rem] leading-[normal] whitespace-nowrap">
        Achievements
      </div>
    </div>
    <p className="font-poppins relative w-[50rem]  font-normal text-white text-[1rem] tracking-[0.80px] leading-[normal]">
      Interested individuals fill out an application form expressing their preference for the &#34;Red Planet Express&#34; option.
    </p>
  </div>
</div>
</div>
)}
</div>
  );
};
export default Achievements;