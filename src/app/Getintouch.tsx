
'use client';

import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <section className="py-16 bg-white text-center mx-5">
      <h2
        className="text-3xl font-semibold mb-10"
        data-aos="fade-up"
      >
        GET IN TOUCH
      </h2>
      <div
        className="border-b-2 w-12 mx-auto border-blue-500 mb-20"
        data-aos="fade-up"
      ></div>

      {/* Contact Info Section */}
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-10 md:pl-150 mb-12"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-blue-500 text-2xl mb-2" />
          <h1 className="font-bold">Phone</h1>
          <p>(0093) 3453 453634 <br />(0093) 3453 4536</p>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-blue-500 text-2xl mb-2" />
          <h1 className="font-bold">Address</h1>
          <p>Gravida in lacus, viverra at</p>
          <p>1050, USA</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-blue-500 text-2xl mb-2" />
          <h1 className="font-bold">Email</h1>
          <p>support@domain.com</p>
          <p>hello@domain.com</p>
        </div>
      </div>

      {/* Image and Form Section */}
      <div
        className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4"
      >
        {/* Image */}
        <div
          className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 -mt-50 hidden lg:block"
          data-aos="zoom-in"
        >
          <Image
            src="/macbook-1.png"
            alt="Contact Image"
            width={600}
            height={500}
          />
        </div>

        {/* Form */}
        <form
          className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 space-y-4 mt-8 lg:mt-0"
          data-aos="fade-left"
        >
          <h1 className="text-lg text-center">Keep in touch with us</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
            />
          </div>
          <input
            type="text"
            placeholder="Subject (optional)"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
          />
          <textarea
            rows={4}
            placeholder="Write your message"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
