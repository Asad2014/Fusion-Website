
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaApple, FaGooglePlay, FaAndroid, FaWindows } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Downloadapp = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#00AEEF] min-h-screen px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between text-white gap-10 py-12 px-4 sm:px-8 md:px-16 lg:px-20">
        
        {/* Left: Text & Icon */}
        <div className="md:w-1/2 text-left md:text-left" 
              data-aos="fade-right"
              data-aos-delay="100">
          <Image
            src="/download-icon.png"
            alt="icon"
            width={50}
            height={50}
            className="rounded-full mb-4 mx-auto md:mx-0 ml-4 sm:ml-6 md:ml-0"
          />
          <h2   data-aos="fade-up"
                data-aos-delay="100"
           className="text-3xl sm:text-4xl font-semibold mb-4 ">
            Download <br /> MOBILEAPPS
          </h2>
          <p   data-aos="fade-right"
              data-aos-delay="100"
             className="mb-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta massa sit amet magna luctus euismod.
            Maurn malesuada nuncLorem ipsum dolor sit ame Lorem ipsum
          </p>
        </div>

        {/* Right: Mockup Image & Icons */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end w-full">
          {/* <div className="w-full sm:w-3/4 md:w-full"> */}
            <div className="w-full sm:w-4/5 md:w-2/3" data-aos="flip-right">
            <Image
              src="/mockup-twin.png"
              alt="app"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-xl mb-6"
            />
          </div>

          {/* Icons below image */}
          <div className="flex justify-center md:justify-end md:gap-6 md:text-3xl text-4xl pr-20 md:pr-25 gap-8" 
            data-aos="fade-right"
            data-aos-delay="200">
            <div className="flex flex-col items-center">
              <FaApple />
            </div>
            <div className="flex flex-col items-center">
              <FaGooglePlay />
            </div>
            <div className="flex flex-col items-center">
              <FaAndroid />
            </div>
            <div className="flex flex-col items-center">
              <FaWindows />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Downloadapp;


