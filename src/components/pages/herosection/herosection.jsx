import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { GoArrowDownRight } from "react-icons/go";
import CircularText from '../../styles/CircularText/CircularText'
import HeroText from '../HeroText/HeroText';
import backgroundImage from '../../../assets/094.png'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const experienceRef = useRef(null);
  const middleTextRef = useRef(null);
  

  useEffect(() => {
    // Lenis smooth scroll setup
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    });

    // lenisRef.current = lenis;



    // Connect Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

   const updateLenis = (time) => lenis.raf(time * 1000);
   gsap.ticker.add(updateLenis);

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
      gsap.ticker.remove(updateLenis);
       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div  >
      <div

>
      {/* Hero Section */}
     <div
  ref={experienceRef}
  className="relative w-full h-screen overflow-hidden bg-[#D1533A] "
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    backgroundBlendMode: "multiply", // blends color with image
  }}
>
        {/* Centered main content */}
        <div className=" absolute inset-0  flex flex-col  md:gap-25 gap-8 text-right items-center justify-center w-full ">
          <h1
            ref={middleTextRef}
            className="font-black whitespace-nowrap select-none tracking-tight transform origin-center 
                  font-mulish bg-[#F0E0CC]
                  bg-[length:300%_300%] bg-clip-text text-transparent animate-waveGradient text-[clamp(3rem,12vw,14rem)]"
          >
            HARSH BARMAN
          </h1>
          
          {/* Subtitle positioned below h1 */}
          <div className="flex flex-row  md:justify-end justify-center gap-4 w-full md:pr-57  ">
            <GoArrowDownRight className="md:text-3xl text-md text-gray-800" />
            <h2 className="md:text-4xl text-lg  text-gray-800 ">
              FRONTEND DEVELOPER
            </h2>
          </div>
          <CircularText
            text=" * SCROLL TO DISCOVER * SCROLL TO DISCOVER"
            onHover="speedUp"
            spinDuration={20}
            className="absolute md:bottom-20 md:left-10 bottom-3 left-3"
          />
        </div>
      </div>
      </div>

      {/* Next section for scroll effect */}
      <section className="h-auto w-full  bg-[#1f1f1f]">
        <div className=" ">
          < HeroText className ='pt-20'/>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;