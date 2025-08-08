'use client';

import React , {useEffect} from 'react';
import {
  FaShoppingCart,
  FaMapMarkerAlt,
  FaCloudSun,
  FaUtensils,
  FaComments,
} from 'react-icons/fa';
import Image from 'next/image';
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {

    useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="py-16 bg-white">
      {/* Top Heading */}
      <div className="text-center mb-12 px-4" data-aos="fade-right">
        <h2 className="text-3xl font-semibold mb-2">APP AWESOME FEATURES</h2>
        <div className="border-b-5 w-8 mx-auto border-blue-500 mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The evening altogether passed off pleasantly to the whole family. Mrs. Bennet had seen her eldest daughter much admired by the Netherfield.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:justify-center justify-start  items-start gap-8 md:px-30 px-10" data-aos="fade-right">
        {/* Left List */}
        <div className="flex flex-col w-full md:w-1/3 divide-y divide-gray-200 space-y-5" >
          <FeatureItem icon={<FaShoppingCart />} label="Online Shopping" />
          <FeatureItem icon={<FaMapMarkerAlt />} label="Your Tracking" />
          <FeatureItem icon={<FaCloudSun />} label="Global Weather" />
          <FeatureItem icon={<FaUtensils />} label="Food Order" />
          <FeatureItem icon={<FaComments />} label="Quick Chat" />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-2/3 md:flex-row gap-6 items-center" data-aos="fade-right">
          {/* Description */}
          <div className="flex-1 pb-50 ">
            <h3 className="font-bold mb-2 text-2xl">EASY ONLINE SHOPPING</h3>
            <p className="text-gray-600 pt-5">
              Bingley was good-looking and gentlemanlike; he had a pleasant countenance, and easy, unaffected manners. His sisters were fine women, with an air of decided fashion. His brother-in-law, Mr. Hurst, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum, eum sequi maiores praesentium adipisci odio eius commodi numquam non sed, magni nihil fugiat pariatur laborum atque. Possimus veniam quam, doloremque neque.
            </p>
          </div>

          {/* Phone Image */}
        
          <Image
          src="https://shtheme.com/demosd/fusion/wp-content/uploads/2022/12/iphone-mockup-1.png"
          alt="App Mockup"
          width={300}
          height={300}
          className=""
          />
          </div>

        </div>
      
    </section>
  );
};

const FeatureItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center gap-3 py-3 cursor-pointer hover:text-blue-500 transition">
    <div className="text-blue-500 text-lg">{icon}</div>
    <span className="font-medium">{label}</span>
  </div>
);

export default FeaturesSection;




