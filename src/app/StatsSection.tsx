
'use client';

import React, { useEffect } from "react";
import CountUp from 'react-countup';
import Image from 'next/image';
import Aos from "aos";
import "aos/dist/aos.css";

const StatsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Top Section - Stats */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Stat Box 1 */}
          <div>
            <h1 className="text-5xl font-bold text-[#00AEEF] mb-2">
              <CountUp end={702} duration={1.5} enableScrollSpy />
            </h1>
            <p className="text-gray-700 text-3xl">App Download</p>
            <div className="border-b-2 w-16 mx-auto border-blue-500 my-5"></div>
            <p className="text-gray-500">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
          </div>

          {/* Stat Box 2 */}
          <div>
            <h1 className="text-5xl font-bold text-[#00AEEF] mb-2">
              <CountUp end={127} duration={1.5} enableScrollSpy />
            </h1>
            <p className="text-gray-700 text-3xl">Free Download</p>
            <div className="border-b-2 w-16 mx-auto border-blue-500 my-5"></div>
            <p className="text-gray-500">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
          </div>

          {/* Stat Box 3 */}
          <div>
            <h1 className="text-5xl font-bold text-[#00AEEF] mb-2">
              <CountUp end={327} duration={1.5} enableScrollSpy />
            </h1>
            <p className="text-gray-700 text-3xl">Best Award</p>
            <div className="border-b-2 w-16 mx-auto border-blue-500 my-5"></div>
            <p className="text-gray-500">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
          </div>
        </div>
      </section>

      {/* Bottom Section - Testimonial with AOS */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6" data-aos="fade-up">
            
            {/* Avatar Image Left */}
            <div className="flex justify-center md:justify-start md:w-1/3 md:pl-10">
              <Image
                src="/avatar.png"
                alt="User avatar"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>

            {/* Text Right */}
            <div className="text-center md:text-left md:w-2/3">
              <p className="text-gray-500 text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil iste eaque architecto, 
                voluptatibus earum ullam corporis beatae ipsa officiis quidem saepe. Commodi, 
                quae voluptatum. Quod iure dignissimos cumque natus!
              </p>

              {/* Name with left border */}
              <div className="flex items-center justify-center md:justify-start">  
                  <h3 className="text-xl font-semibold text-black">— John Doe</h3>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default StatsSection;
