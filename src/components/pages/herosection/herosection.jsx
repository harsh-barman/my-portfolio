import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { GoArrowDownRight } from "react-icons/go";
import CircularText from '../../styles/CircularText/CircularText'
import HeroText from '../HeroText/HeroText';

import Particles from '../../styles/Particle';
import { style } from 'motion/react-client';

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
      scaleX: 0.9,
      scaleY: 1.8,
    });
    // Animation for scaling the middle text
    exp.to(middleTextRef.current, {
      scale: 30,
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
      {/* Hero Section */}
      <div ref={experienceRef}
        className="relative w-full h-screen overflow-hidden  bg-[#F0E0CC] " 
      >{/*bg-[#D1533A] */}

        <div style={{ width: '100%', height: '100vh' }}>
          <Particles
            particleColors={['#D1533A', '#eac394' ]}
            particleCount={1000}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={300}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        {/* Centered main content */}
        <div className=" absolute inset-0  flex flex-col  md:gap-25 gap-8 text-right items-center justify-center w-full md:w-6xl h-[150px]
                   md:h-[470px] bg-[#D1533A] mx-auto my-auto md:rounded-2xl ">
          <h1
            ref={middleTextRef}
            className="font-black whitespace-nowrap select-none  transform origin-center 
                  font-mulish 
                   text-[clamp(2rem,12vw,9rem)]  text-[#eac394] md:pt-15 pt-5"
                   style={{ fontFamily: '"Boldonse", system-ui' }}
          >
            HARSH BARMAN
          </h1>
          
          {/* Subtitle positioned below h1 */}
          <div className="flex  md:justify-end justify-center gap-4 w-full md:pr-6  ">
            <GoArrowDownRight className="md:text-3xl text-md text-[#eac394]" />
            <h2 className="md:text-4xl text-md  text-[#eac394] font-bold  "
            style={{ fontFamily: '"Italiana", sans-serif' }}
            >
              FRONTEND DEVELOPER AND DESIGNER
            </h2>
          </div>
         
        </div>
         <CircularText
            text=" * SCROLL TO DISCOVER * SCROLL TO DISCOVER"
            onHover="speedUp"
            spinDuration={20}
            className="absolute md:bottom-10 md:left-8 bottom-3 left-3"
          />
      
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