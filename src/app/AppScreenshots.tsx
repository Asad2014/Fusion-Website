
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AppScreenshots() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      {/* Title */}
      <div data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-2">APP SCREENSHOT</h2>
        <div className="w-8 h-1 bg-blue-500 mx-auto mb-6" />
        <p className="text-sm max-w-2xl md:mx-auto text-gray-600 mb-10 mx-4">
          Quisque erat mi.Etiam congue et augue sed tempus.Aenean sed
          <br />
          ipsum luctus, scelerisque ipsum nec, iaculis justo.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="" data-aos="zoom-in-up">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
    
          autoplay={{ delay: 3000 }}
          loop
          className="w-full max-w-3xl"
        >
          <SwiperSlide>
            <Image
              src="/browser-mockup-1.png"
              alt="Slide 1"
              width={500}
              height={500}
              className="mx-auto w-full h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/browser-mockup-2.png"
              alt="Slide 2"
              width={500}
              height={500}
              className="mx-auto w-full h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/browser-mockup-3.png"
              alt="Slide 3"
              width={500}
              height={500}
              className="mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Download Section */}
      <div className="bg-gray-100 mt-16 py-10 px-4" data-aos="fade-up">
        <h3 className="text-3xl font-semibold mb-3 mx-4 md:mx-0">
          DOWNLOAD THE FUSION APP FROM PLAY STORE
        </h3>
        <p className="text-gray-500 max-w-xl mx-auto text-2xl mb-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 items-center" data-aos="fade-up" data-aos-delay="100">
          {/* App Store */}
          <button className=" w-auto flex items-center gap-2 bg-black text-white md:px-3 px-6 py-2 rounded hover:bg-gray-800">
            <FaApple size={30} />
            <div className="text-left leading-tight">
              <small className="block text-xs">Download from</small>
              <span className="text-sm font-semibold">App Store</span>
            </div>
          </button>

          {/* Windows Store */}
          <button className="flex items-center gap-2 bg-black text-white md:px-3 px-6 py-2 rounded hover:bg-gray-800">
            <FaWindows size={30} />
            <div className="text-left leading-tight">
              <small className="block text-xs">Download from</small>
              <span className="text-sm font-semibold">Windows</span>
            </div>
          </button>

          {/* Google Play */}
          <button className="flex items-center gap-2 bg-black text-white md:px-3 px-6 py-2 rounded hover:bg-gray-800">
            <FaGooglePlay size={30} />
            <div className="text-left leading-tight">
              <small className="block text-xs">Get it from</small>
              <span className="text-sm font-semibold">Google Play</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
