import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import videoBg from "../../assets/Announcement.mp4";
import { Player, ControlBar, VolumeMenuButton } from 'video-react';


const Competitions = () => {
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
    <div className="mt-14" id="achievements">
      {isVideoPlaying ? (
        <div className="w-screen h-screen">
          <video controls
          autoPlay  
          src={videoBg}
          type="video/mp4"
          onEnded={() => setIsVideoPlaying(false)}
          className="object-cover w-full h-full"
          volume={1}
        ></video>
        </div>
      ) : (
        <HorizontalScrollCarousel />
      )}
    </div>
  );
};

export default Competitions;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["-75%", "1%"]);

  return (
    <div id="achievements" className="mt-[4rem] mb-[8rem]">
      <div className=" justify-center text-center text-3xl text-white font-meth component_title mb-[-5rem]">
        Achievements
      </div>
      <section ref={targetRef} className="relative h-[80vh]">
        <div className="sticky top-0 flex items-center h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
const cards = [
  {
    url: require("../../assets/ERCremote_2023.jpeg"),
    title: "2nd rank ERC Remote 2023",
    id: 1,
  },
  {
    url: require("../../assets/ERConsite_2023.jpeg"),
    title: "10th rank ERC Onsite 2023",
    id: 2,
  },
  {
    url: require("../../assets/irc-2023.jpg"),
    title: "8th rank IRC'2023",
    id: 3,
  },
  {
    url: require("../../assets/IRDC.jpeg"),
    title: "3rd rank IRDC 2022",
    id: 4,
  },
  {
    url: require("../../assets/erc_remote_2022.JPG"),
    title: "1st rank ERC Remote 2022",
    id: 5,
  },
  {
    url: require("../../assets/irc-2023.jpg"),
    title: "1st rank ERC Remote 2021",
    id: 6,
  },
  {
    url: require("../../assets/2nd_IPASC.jpeg"),
    title: "2nd rank IPASC 2021",
    id: 7,
  },
  {
    url: require("../../assets/MarsHackathon.jpeg"),
    title: "8th International Mars hackathon 2020",
    id: 8,
  },
  {
    url: require("../../assets/erc_remote_3rrd.jpg"),
    title: "3rd rank ERC remote 2020",
    id: 9,
  },
];

const Card = ({ card }) => {
  return (
    <>
      <div
        key={card.id}
        className="group mr-14 relative h-[25rem] w-[25rem] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            width: "100%", // Set the width to 100% of the container
            height: "100%", // Set the height to 100% of the container
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        >
          <img
            src={card.url}
            alt={card.title}
            style={{
              width: "100%", // Set the width to 100% of the container
              height: "100%", // Set the height to 100% of the container
              objectFit: "cover", // Ensure the image covers the container
            }}
          />
        </div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="p-8 text-3xl font-black text-white uppercase bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-sm">
            {card.title}
          </p>
        </div>
      </div>
    </>
  );
};


