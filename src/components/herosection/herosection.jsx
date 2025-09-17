import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const experienceRef = useRef(null);
  const middleTextRef = useRef(null);
  const extraBoxRef = useRef(null);

  useEffect(() => {
    const exp = gsap.timeline({
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top top",
        end: "+=5000",
        scrub: true,
        pin: experienceRef.current
      }
    });

    // Animation for scaling the middle text
    exp.to(middleTextRef.current, {
      scale: 30,
      ease: "none",
      transformOrigin: "center center"
    });

    // Animation for the orange overlay
    exp.from(
      extraBoxRef.current,
      {
        scaleX: 0,
        ease: "none"
      },
      "-=0.4"
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div 
        ref={experienceRef}
        className="relative w-full h-screen z-10 overflow-hidden bg-black"
      >
        {/* Orange overlay box */}
        <div 
          ref={extraBoxRef}
          className="absolute top-0 left-0 w-full h-full bg-orange-500 opacity-70 z-10 pointer-events-none origin-left"
        />
        
        {/* Main content container */}
        <div className="w-full h-screen flex justify-center items-center">
          <h1 
            ref={middleTextRef}
            className="text-9xl font-bold text-white whitespace-nowrap select-none"
            style={{ 
              fontSize: '8rem',
              transformOrigin: '48.2% center'
            }}
          >
            HARSH BARMAN
          </h1>
        </div>
      </div>
      
      {/* Next section for scroll effect */}
      <section className="h-screen w-full mt-4 flex items-center justify-center text-6xl bg-gray-100">
        <div className="text-center">
          <h2 className="text-gray-800 font-bold">Your Next Section</h2>
          <p className="text-xl mt-4 text-gray-600">Add your content here</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;