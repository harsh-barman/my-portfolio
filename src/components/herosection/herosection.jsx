import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { GoArrowDownRight } from "react-icons/go";
import CircularText from '../styles/CircularText/CircularText'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const experienceRef = useRef(null);
  const middleTextRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Lenis smooth scroll setup
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // function raf(time) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

  

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const exp = gsap.timeline({
      scrollTrigger: {
        trigger: experienceRef.current,
        start: 'top top',
        end: '+=5000',
        scrub: 1,
        pin: experienceRef.current,
        anticipatePin: 1,
      },
    });
    gsap.set(middleTextRef.current, {
  scaleX: 0.7,
  scaleY: 3,
});
    // Animation for scaling the middle text
 exp.to(middleTextRef.current, {
  scale: 60,
  transformOrigin: 'center center',
  ease: 'none',
});

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        ref={experienceRef}
        className="relative w-full h-screen overflow-hidden bg-grey-500 flex "
      >
        {/* Centered main content */}
        <div className="flex flex-col  md:gap-25 gap-8 text-right items-center justify-center w-full">
          {/* Main heading */}
          <h1
            ref={middleTextRef}
            className="font-black whitespace-nowrap select-none tracking-tight transform origin-center 
                  font-mulish bg-[linear-gradient(45deg,#f0d1d6,#db98a3,#b86981,#7a4959,#3d252c,#5d0223,#8b0a3a,#b86981,#db98a3,#f0d1d6)]
                  bg-[length:300%_300%] bg-clip-text text-transparent animate-waveGradient md:text-[12rem] text-[50px]"
          >
            HARSH BARMAN
          </h1>
          
          {/* Subtitle positioned below h1 */}
          <div className="flex flex-row  justify-end gap-4 w-full md:max-w-5xl ">
            <GoArrowDownRight className="md:text-3xl text-md text-gray-800" />
            <h2 className="md:text-4xl text-lg  text-gray-800 ">
              FRONTEND DEVELOPER
            </h2>
          </div>
          <CircularText
            text=" * SCROLL TO DISCOVER * SCROLL TO DISCOVER"
            onHover="speedUp"
            spinDuration={20}
            className="absolute md:bottom-10 md:left-10 bottom-3 left-3"
          />
        </div>
      </div>

      {/* Next section for scroll effect */}
      <section className="h-auto w-full flex items-center justify-center text-6xl bg-gray-100">
        <div className="text-center">
          <h2 className="text-gray-800 font-bold">Your Next Section</h2>
          <p className="text-xl mt-4 text-gray-600">Add your content here</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;