import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import videoBg from "../../assets/Announcement.mp4";

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
          <video
            muted
            autoPlay
            src={videoBg}
            type="video/mp4"
            onEnded={() => setIsVideoPlaying(false)}
            className="object-cover w-full h-full"
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

  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "1%"]);

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
    url: "https://th.bing.com/th/id/R.7cdf60c7cd8b2b14995694dcd7c99e06?rik=3obl%2fhI6QdNIMA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2ffree-beautiful-place-wallpaper-hd-173.jpg&ehk=92RRpT4hrYheMDBZkK0HhLLXx9%2fGDjnafeDmbgjE1K8%3d&risl=1&pid=ImgRaw&r=0",
    title: "2nd rank ERC Remote",
    id: 1,
  },
  {
    url: "https://wallpaperaccess.com/full/809523.jpg",
    title: "10th rank ERC Onsite",
    id: 2,
  },
  {
    url: "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    title: "8th rank IRC'2023",
    id: 3,
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
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="p-8 text-3xl font-black text-white uppercase bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    </>
  );
};
