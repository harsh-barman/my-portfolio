import React from 'react'

export default function About() {
  return (
    <div className='h-screen w-full bg-amber-800' >
        <div className=' flex md:pl-[5rem] pt-5'>
            <blockquote className='text-left text-[2rem] w-full md:w-[500px] border-l-4 border-[#4a5568] pl-[16px] font-bold'
             style={{ fontFamily: '"Italiana", sans-serif' }}
             >
                 I was born and raised in Jabalpur and I'm currently residing in Madhya Pradesh.
            </blockquote>
        </div>
        <div className='pt-[14rem]'
        style={{ fontFamily: '"Italiana", sans-serif' }}
        >
            <div className='flex flex-col md:pl-[10rem]'>
                <h2 className='text-[22px] mb-[5rem]'>
                    WHAT I DO
                </h2>
                <div className=''>
                    <p className='flex flex-col'>
                        I value storytelling while considering human-based design,
                        so I’m able to explore new ways brands can connect with
                        people. I'm constantly gathering inspiration and searching
                        for innovative ideas.
                    </p><br></br>
                    <span className='pt-50'>
                        I’m curious, and passionate, and strive for continuous evolution.
                        I’ve made creativity my lifestyle. Ever since I was a kid, art
                        has been what makes me tick. To this day, art is what moves me
                        to explore and play around with new shapes and techniques to
                        find solutions that are appealing and efficient.
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
