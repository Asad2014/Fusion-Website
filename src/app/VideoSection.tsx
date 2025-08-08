
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PencilLine } from "lucide-react";

export default function VideoSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white pt-12 pb-4">
    
         {/* Top Text Content */}
   <div className="container mx-auto px-4">
  <div
    className="flex flex-col md:flex-row justify-center md:justify-center items-center md:items-start gap-6 
    text-center md:text-left"
    data-aos="fade-up"
  >
    {/* Heading */}
    <h2 className="text-2xl font-semibold flex items-center border-l-4 border-blue-500 pl-3">
      DISCOVER VIDEO 
      <br className="md:hidden" /> 
      <br className="hidden md:block" /> 
      FUSION APPS
    </h2>

    {/* Paragraph Section */}
    <div className="flex items-center md:items-start gap-2 max-w-md text-sm text-gray-600 mx-5">
      <PencilLine className="text-blue-500 mt-1 flex-shrink-0" size={18} />
      <p className="leading-relaxed text-center">
        Not all that Mrs. Bennet, however, with the assistance of her
        five daughters, could ask on the subject, was sufficient
      </p>
    </div>
  </div>
</div>


      {/* Video Section */}
      <div
        className="relative mt-10 w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden"
        data-aos="zoom-in"
      >
        <iframe
          width={0}
          height={400}
          src="https://www.youtube.com/embed/74SX19N1s6o"
          title="YouTube video"
          className="w-full"
          allowFullScreen
        ></iframe>

        <div className="absolute inset-0 pointer-events-none"></div>
      </div>
    </section>
  );
}




