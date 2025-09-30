import { div } from "motion/react-client";
import React from "react";

export default function Projects() {
  return (
    <div>
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="font-black    text-[clamp(2rem,10vw,5rem)]  text-[#eac394] pb-[2rem] "
                style={{
                fontFamily: '"Boldonse", system-ui',
                transform: 'scaleX(0.7) scaleY(2)'}}
            >
                RECENT PROJECTS
            </h1>
            <span className="text-2xl pt-[3rem]"
            style={{ fontFamily: '"Italiana", sans-serif' }}>Check out some of the most recent projects I've had the
pleasure of working on.</span>

        </div>
        <div className="pt-[20rem] w-full md:max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-12">
            {/* Column 1 - Full width, shorter height */}
            
            
            {/* Column 2 - Takes 8 cols on medium+, full width on mobile, taller height */}
            <div className="col-span-12 md:col-span-7">
            <div className="bg-blue-100 p-6 rounded-lg h-[500px] flex items-start">
                <span className="text-2xl font-bold">2</span>
            </div>
            </div>
            
            {/* Column 3 - Takes 4 cols on medium+, full width on mobile, taller height */}
            <div className="col-span-12 md:col-span-5">
            <div className="bg-blue-100 p-6 rounded-lg h-[380px] flex items-start">
                <span className="text-2xl font-bold">3</span>
            </div>
            </div>

            <div className="col-span-12 pt-[6rem]">
            <div className="bg-blue-100 p-6 rounded-lg h-[150px] flex items-start">
                <span className="text-2xl font-bold">1</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}