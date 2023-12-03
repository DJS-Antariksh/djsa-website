import React from 'react'
import Carousel , { consts } from "@itseasy21/react-elastic-carousel";
import "./Carousel.css"
import { FaArrowCircleRight , FaArrowCircleLeft } from "react-icons/fa";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1500, itemsToShow: 3 },
];

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <FaArrowCircleRight className='custom_icon' />  : <FaArrowCircleLeft className='custom_icon' />
  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  )
}

const CarouselMain = () => {
  const settings = {
    pagination: true,
    isRTL: true,
  };

  const items = [
    {
      img: require("../../assets/ERCremote_2023.jpeg"),
      title: "2nd Rank ERC Remote 2023",
      id: 9,
    },
    {
      img: require("../../assets/ERConsite_2023.jpeg"),
      title: "10th Rank ERC Onsite 2023",
      id: 8,
    },
    {
      img: require("../../assets/irc-2023.jpg"),
      title: "8th Rank IRC'2023",
      id: 7,
    },
    {
      img: require("../../assets/IRDC.jpeg"),
      title: "3rd Rank IRDC 2022",
      id: 6,
    },
    {
      img: require("../../assets/erc_remote_2022.JPG"),
      title: "1st Rank ERC Remote 2022",
      id: 5,
    },
    {
      img: require("../../assets/irc-2023.jpg"),
      title: "1st Rank ERC Remote 2021",
      id: 4,
    },
    {
      img: require("../../assets/2nd_IPASC.jpeg"),
      title: "2nd Rank IPASC 2021",
      id: 3,
    },
    {
      img: require("../../assets/MarsHackathon.jpeg"),
      title: "8th International Mars hackathon 2020",
      id: 2,
    },
    {
      img: require("../../assets/erc_remote_3rrd.jpg"),
      title: "3rd Rank ERC remote 2020",
      id: 1,
    },
  ];
  
  return (
    <>
      <h1 className='justify-center text-center text-3xl text-white font-meth component_title mb-[5rem]'>ACHIEVEMENTS</h1>
      <div className="carousel_elastic ">
        <Carousel renderArrow = {myArrow} {...settings} breakPoints={breakPoints}>
          {items.map((item) => (
            <div className='item_set' key={item.id}>
              <img className='item_img' src={item.img} alt="" />
              <h2 className='item_head text-white font-poppins'>{item.title}</h2>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default CarouselMain