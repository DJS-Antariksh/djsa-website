import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutIrc = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // GSAP Animation
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
    tl.from(headingRef.current, { opacity: 0, y: -50, clearProps: "all" })
      .from(paragraphRef.current, { opacity: 0, y: 50 }, '-=0.5'); // Overlap animations
  }, []);

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
        <div
        ref={headingRef}
        className="text-white font-meth ss:text-[36px] text-[24px] ss:-mt-[20%] tracking-widest mb-4 font-bold"
        >
        ABOUT IRC 2026
        </div>

      <div
        ref={paragraphRef}
        className="text-white font-poppins ss:w-[80%] w-[75%] ss:text-2xl text-md ss:leading-relaxed text-justify ss:px-[7%]"
      >
        The International Rover Challenge 2026 is a prestigious global competition that brings together teams from universities across the world to design and build advanced Martian rovers capable of executing a range of mission-inspired tasks that assess engineering innovation, system reliability, and field performance. The development of these rovers demands cutting-edge mechanical design supported by the cohesive integration of electronic and AI-enabled subsystems, all operating together as a unified robotic system to ensure durability, and functionality in extreme environments. The teams must prepare a rover capable of navigating uneven terrain, detecting designated cones, performing manipulation tasks with the robotic arm of the rover, and collecting data for further scientific research. Beyond the technical capabilities of the rover, the challenge enables the participants to gain comprehensive understanding of end-to-end project execution and contribute to the future of space exploration, planetary rover development, and autonomous systems.
      </div>
    </div>
  );
};

export default AboutIrc;