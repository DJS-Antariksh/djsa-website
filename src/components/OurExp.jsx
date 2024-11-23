import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OurExp = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current, // The section to watch
        start: 'top 80%', // Animation starts when the top of the section is 80% down the viewport
        end: 'bottom 50%', // Animation ends when the bottom is 50% down the viewport
        toggleActions: 'play none none none', // Play animation only once
      },
    });

    tl.from(headingRef.current, { opacity: 0, y: -50, duration: 1 })
      .from(paragraphRef.current, { opacity: 0, y: 50, duration: 1 }, '-=0.5'); // Overlapping animation
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center items-center gap-8"
    >
      <div
        ref={headingRef}
        className="text-white font-meth text-4xl mt-[%] mb-7 tracking-widest font-bold"
      >
        OUR EXPERIENCE
      </div>

      <div className='w-[70%] px-[8%] '>
        <img src="./our.jpg" className="border-[5px] border-white rounded-2xl" />
      </div>

      <div
        ref={paragraphRef}
        className="text-gray-300 font-poppins text-xl leading-relaxed text-justify w-[80%] px-[13%]"
      >
        <br />
        Participating in the International Rover Challenge (IRC) has been an
        extraordinary experience that has pushed the boundaries of our technical
        and collaborative capabilities. From designing and assembling a robust
        rover to navigating complex challenges like terrain traversal,
        autonomous navigation, and scientific exploration, the competition has
        tested every aspect of our engineering expertise. The interdisciplinary
        collaboration between software, mechanical, and electronics teams
        fostered innovation and teamwork, while the high-pressure environment has
        sharpened our problem-solving skills. Competing alongside teams from
        around the globe provided us with invaluable insights, new
        perspectives, and a sense of camaraderie that transcended borders. IRC
        not only allowed us to showcase our rover’s capabilities but also
        deepened our passion for space exploration and robotics. The event left us inspired, motivated, and eager to tackle even greater challenges in the future, especially after securing the 2nd runner-up position last year. We are determined to push the boundaries of our knowledge and skills, aiming to achieve even greater heights this year.
      </div>
    </div>
  );
};

export default OurExp;
