/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurExp = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headingRef.current, { opacity: 0, y: -50, duration: 1 })
      .from(paragraphRef.current, { opacity: 0, y: 50, duration: 1 }, "-=0.5");
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center items-center gap-8"
    >
      {/* Heading */}
      <div
        ref={headingRef}
        className="text-white font-meth text-[24px] ss:text-[36px] mb-7 tracking-widest font-bold opacity-1"
      >
        OUR EXPERIENCE
      </div>

      {/* MAIN CONTAINER (80% of screen) */}
      <div className="w-[80%] mx-auto px-[8%] ss:px-[12%] flex flex-col gap-8">

        {/* IMAGE — smaller, centered */}
        <div className="w-full flex justify-center">
          <img
            src="/tasks/irc2025_win1.jpg"
            className="w-full ss:w-full h-[30%] ss:h-[30%] border-white ss:border-[5px] border-[2px] rounded-2xl"
          />
        </div>

        {/* TEXT — full width of container */}
        <div
          ref={paragraphRef}
          className="w-full text-gray-300 font-poppins ss:text-[20px] text-[16px] ss:leading-relaxed leading-snug text-justify"
        >
          <p>
            Competing at the International Rover Challenge (IRC) has been a truly memorable experience. It pushed our technical capabilities and managerial skills beyond our limits. From brainstorming to manufacturing the rover for complex challenges like autonomous navigation and scientific exploration, the competition thoroughly tests our engineering expertise. Coordinated efforts among various departments enabled the team to develop a rover fully equipped “To Decipher Unimaginable”. Furthermore, competing alongside international teams helps us understand different methodologies and approaches, giving us practical insights that strengthens our overall learning and offers a broader perspective on innovation, turning the event into a platform for cross-cultural learning and professional growth. Securing a podium finish for the past two years has left us incredibly inspired and proud, giving us confidence as a team. However, we view this success not as a final destination, but as a strong foundation to build upon. Using this experience as a solid framework, we strive to improve our skills and achieve even greater heights this year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurExp;
