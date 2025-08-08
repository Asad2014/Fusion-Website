
'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      {/* Heading */}
      <div className="text-center mb-12 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-2">OUR AWESOME TEAM</h2>
        <div className="border-b-4 w-8 mx-auto border-blue-500 mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The evening altogether passed off pleasantly to the whole family. Mrs. Bennet had
          seen her eldest daughter much admired by the Netherfield.
        </p>
      </div>

      {/* Team Members */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Member 1 */}
        <div className="text-center" data-aos="fade-up">
          <div className="border-2 border-yellow-400 p-1 inline-block mb-4">
            <Image
              src="/team-1.jpg"
              alt="SHAIKAT AHMED"
              width={250}
              height={250}
              className="rounded"
            />
          </div>
          <h3 className="font-bold">SHAIKAT AHMED</h3>
          <div className="w-15 border-b-2 border-yellow-500 my-2 mx-auto"></div>
          <p className="text-gray-500 mb-4">Front-end Designer</p>
          <div className="flex gap-3 justify-center mb-4 text-gray-400">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
          </div>
          <p className="text-gray-500 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus dui sit amet
            ligula efficitur.
          </p>
        </div>

        {/* Member 2 */}
        <div className="text-center" data-aos="fade-up">
          <div className="border-2 border-yellow-400 p-1 inline-block mb-4">
            <Image
              src="/team-2.jpg"
              alt="LUTFUL KABIR"
              width={250}
              height={250}
              className="rounded"
            />
          </div>
          <h3 className="font-bold">LUTFUL KABIR</h3>
          <div className="w-15 border-b-2 border-yellow-500 my-2 mx-auto"></div>
          <p className="text-gray-500 mb-4">Front-end Designer</p>
          <div className="flex gap-3 justify-center mb-4 text-gray-400">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
          </div>
          <p className="text-gray-500 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus dui sit amet
            ligula efficitur.
          </p>
        </div>

        {/* Member 3 */}
        <div className="text-center" data-aos="fade-up">
          <div className="border-2 border-yellow-400 p-1 inline-block mb-4">
            <Image
              src="/team-3.jpg"
              alt="SUZON ABDULLAH"
              width={250}
              height={250}
              className="rounded"
            />
          </div>
          <h3 className="font-bold">SUZON ABDULLAH</h3>
          <div className="w-15 border-b-2 border-yellow-500 my-2 mx-auto"></div>
          <p className="text-gray-500 mb-4">UI/UX Designer</p>
          <div className="flex gap-3 justify-center mb-4 text-gray-400">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
          </div>
          <p className="text-gray-500 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus dui sit amet
            ligula efficitur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
