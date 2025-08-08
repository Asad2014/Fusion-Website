'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaBehance, FaDribbble, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative bg-[#00AEEF] text-white overflow-hidden py-16">
      {/* Center Content */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="md:text-[35px] text-[28px] font-semibold mb-2">Perfect Fusion Application</h2>
        <p className="md:text-[25px] text-[20px] mb-6">New Popular Application Download!</p>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button className="bg-white text-black px-4 py-4 rounded font-semibold hover:bg-gray-100 transition">
            DOWNLOAD NOW!
          </button>
          <button className="border border-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-blue-600 transition">
            LEARN MORE
          </button>
        </div>

        {/* Swiper Slider */}
        <div className="hidden lg:block">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          className="w-full max-w-3xl"
        >
          <SwiperSlide>
            <Image
              src="/macbook-1.png"
              alt="Slide 1"
              width={700}
              height={500}
              className="mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/macbook-1.png"
              alt="Slide 2"
              width={700}
              height={500}
              className="mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/macbook-1.png"
              alt="Slide 3"
              width={700}
              height={500}
              className="mx-auto"
            />
          </SwiperSlide>
        </Swiper>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:gap-6 gap-10 mt-6">
          <FaFacebookF className="cursor-pointer hover:text-gray-200" />
          <FaTwitter className="cursor-pointer hover:text-gray-200" />
          <FaBehance className="cursor-pointer hover:text-gray-200" />
          <FaDribbble className="cursor-pointer hover:text-gray-200" />
          <FaGithub className="cursor-pointer hover:text-gray-200" />
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;








