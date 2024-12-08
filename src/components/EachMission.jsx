import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EachMission = ({ title, description, imgSrc, imagePosition }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    // Reset positions
    gsap.set(image, {
      x: imagePosition === 'right' ? '100%' : '-100%',
      opacity: 0
    });
    
    gsap.set(content, {
      x: imagePosition === 'right' ? '-100%' : '100%',
      opacity: 0
    });

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(content, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(image, {
      x: 0,
      opacity: 1,
      duration: 3,
      ease: "power3.out"
    }, "-=0.5");
     // Start slightly before the first animation ends

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [imagePosition]);

  return (
    <div ref={containerRef} className="w-full mb-12 overflow-hidden ">
      <div className={`flex items-center ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-[5%] items-center`}>
          <div
            ref={imageRef}
            className="hidden md:flex w-full md:w-1/3 justify-center sm:block items-center"
          >
            <div className="flex justify-center items-center aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src={imgSrc}
                alt={`${title} mission`}
                className="w-[80%] h-[80%] object-cover transform hover:scale-105 transition-transform duration-300 rounded-2xl"
              />
            </div>
          </div>

        <div ref={contentRef} className="w-full md:w-2/3 space-y-4 flex flex-col items-center">
          <h2 className="text-white font-meth text-3xl font-semibold sm:tracking-wide">
            {title}
          </h2>
          
          <p className="text-gray-300 font-poppins sm:text-xl text-md px-2 mx-6 sm:mx-0 sm:px-0 sm:leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachMission;