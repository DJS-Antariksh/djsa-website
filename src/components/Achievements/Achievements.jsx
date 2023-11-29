import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import videoBg from "../../assets/Announcement.mp4";
import { Player, ControlBar, VolumeMenuButton } from 'video-react';
import {  useDragControls } from "framer-motion";
import Carousel from "./Carousel"

const Competitions = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    // Simulate the video ending after a certain time (e.g., 5 seconds)
    const videoDuration = 90000; // 5 seconds
    const timer = setTimeout(() => {
      setIsVideoPlaying(false);
    }, videoDuration);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const videoRef = useRef(null);

  const playVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };
  return (
    <div className="mt-14 mb-[10rem]" id="achievements">
      {isVideoPlaying ? (
        <div className="w-screen h-screen">
          <video
          autoPlay
          controls
          src={videoBg}
          type="video/mp4"
          onEnded={() => setIsVideoPlaying(false)}
          className="object-cover w-full h-full"
        ></video>
        </div>
      ) : (
        
        <Carousel />
      )}
    </div>
  );
};

export default Competitions;