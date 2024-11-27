import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutIrc = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // GSAP Animation
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
    tl.from(headingRef.current, { opacity: 0, y: -50 })
      .from(paragraphRef.current, { opacity: 0, y: 50 }, '-=0.5'); // Overlap animations
  }, []);

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
<div
  ref={headingRef}
  className="text-white font-meth text-2xl sm:text-4xl -mt-[20%] tracking-widest mb-4 font-bold"
>
  ABOUT IRC 2025
</div>


      <div
        ref={paragraphRef}
        className="text-white font-poppins sm:w-[80%] w-[75%] sm:text-2xl text-sm sm:leading-relaxed text-justify sm:px-[7%]"
      >
        The International Rover Challenge 2025 is a premier global competition where teams from universities and research institutions around the world design and build martian rovers to tackle a variety of challenging tasks. The competition simulates real-world scenarios that require cutting-edge mechanical design, electronics integration, robotics and AI to ensure the rover's durability, control, and functionality in challenging environments. Teams are tasked with designing rovers capable of performing tasks such as terrain navigation, obstacle avoidance, data collection, and remote operations. IRC encourages innovation, teamwork, and problem-solving in robotics, providing participants with an unparalleled opportunity to showcase their engineering skills while contributing to the future of space exploration, planetary rovers, and autonomous systems. Join us in this exciting race to push the limits of rover technology!
      </div>
    </div>
  );
};

export default AboutIrc;