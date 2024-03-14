import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import erc from "../../assets/ERC.jpeg";
import irc from "../../assets/IRC.png";
import irdc from "../../assets/IRDC.png";
import isdc from "../../assets/spros.jpeg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import cad from '../../assets/click_and_drag.png'
import './Competition.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  const [scrollIndex, setScrollIndex] = useState(2)

  const handleScrollClick = (value) =>{
    if (value === scrollIndex) {
      return;
    }
    setScrollIndex(value);
  }
  return (
    <>
      <p className='justify-center text-center text-3xl text-white font-meth component_title mb-[5rem] sm:mb-[5rem]'>Competitions</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        initialSlide={2}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 10,
          stretch: -20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex flex-col items-center justify-evenly w-full text-justify h-full absolute gap-4  z-20 backdrop-blur-md opacity-0 hover:opacity-100'>
          <div className='font-poppins title text-center relative z-40 font-black text-lg'>European Rover Challenge (Onsite Formula)</div>
          <div className='font-poppins content relative text-center z-30 w-full left-8 px-4'>European Rover Challenge is an annual International Martian Rover competition. In the on-site formula, student teams from all over the world work hard to prepare a fully functional Mars rover of their design.
          </div>
          </div>
          <img src={erc} className='image absolute'/>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='flex flex-col items-center justify-evenly w-full text-justify h-full absolute gap-4  z-20 backdrop-blur-md opacity-0 hover:opacity-100'>
          <div className='title font-poppins relative text-center z-40 font-black text-lg'>International Rover Design Challenge</div>
          <div className='content font-poppins relative text-center z-30 w-full left-8 px-4'>International Rover Design Challenge is an online space engineering design and research-oriented competition by Space Robotics Society. Teams must carefully plan each sub-system of the Rover considering various extra-terrestrial parameters in their design.
          </div>
          </div>
          <img src={isdc} className='image absolute'/> 
        </SwiperSlide>
        
        <SwiperSlide >
        <div className='flex flex-col items-center justify-evenly w-full text-justify h-full absolute gap-4 z-20 backdrop-blur-md opacity-0 hover:opacity-100'>
          <div className='title font-poppins relative text-center z-40 font-black text-lg'>International Rover Challenge</div>
          <div className='content font-poppins relative text-center z-30 w-full left-8 px-4'>International Rover Challenge is an Indian space robotics engineering competition which was started in the year 2017. It challenges university students to conceptualize, design, develop and operate an astronaut-assistive next-generation space Rover and perform specific missions in Mars simulated conditions.
          </div>
          </div>
          <img src={isdc} className='image absolute'/>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='flex flex-col items-center justify-evenly w-full text-justify h-full absolute gap-4  z-20 backdrop-blur-md opacity-0 hover:opacity-100'>
          <div className='title font-poppins relative text-center z-40 font-black text-lg'>Internatinal Space Drone Challenge</div>
          <div className='content font-poppins relative text-center z-30 w-full left-8 px-4'>International Space Drone Challenge is a space robotics engineering competition. It challenges university students to conceptualize, design, develop and operate an astronaut-assistive next-generation space drone and perform specific missions in Mars simulated conditions.
          </div>
          </div>
          <img src={isdc} className='image absolute'/>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='flex flex-col items-center justify-evenly w-full text-justify h-full absolute gap-4  z-20 backdrop-blur-md opacity-0 hover:opacity-100'>
          <div className='title font-poppins relative text-center z-40 font-black text-lg'>European Rover Challenge (Remote Formula)</div>
          <div className='content font-poppins relative text-center z-30 w-full left-8 px-4'>European Rover Challenge (ERC, ERC Space & Robotics) is an annual international Martian robot competition that has been organized since 2014 in Poland. In the remote formula, teams taking part in the remote formula will all use standardized equipment during the competition.
          </div>
          </div>
          <img src={erc} className='image absolute'/>
        </SwiperSlide>
      </Swiper>
      <div className='w-full h-[40px] flex flex-row justify-center'>
          <img className='w-10 h-10' src={cad} alt="click_and_drop"/>
      </div>
    </>
  );
}