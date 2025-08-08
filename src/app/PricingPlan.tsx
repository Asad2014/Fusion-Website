
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PricingPlan() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white pb-8 pt-4 px-4 sm:px-6 lg:px-8 mt-10 md:mt-0">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center"  data-aos="fade-right">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          PRICING PLAN
        </h2>
        <div className="border-b-6 w-8 mx-auto border-blue-500 mb-4 mt-5"></div>
        <p className="mt-4 text-gray-500 max-w-3xl mx-5 md:mx-auto" data-aos="fade-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3  max-w-7xl md:mx-10  mx-auto gap-10 md:gap-0"  data-aos="fade-right">
        {/* Personal Plan */}
        <div
          className="rounded-lg shadow p-6 flex flex-col items-center space-y-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold">Personal</h3>
          <div className="border-b-2 w-12 border-blue-500"></div>
          <p className="mt-2 text-gray-500">
            From <span className="line-through">$99</span> Per Month
          </p>
          <ul className="mt-6 space-y-20 text-gray-700 text-sm">
            <li>
              ✅ <strong>01 APPS Pack</strong>
              <p className="text-xs text-gray-400 py-3">
                Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
              </p>
            </li>
            <li>
              ✅ <strong>01 Free Apps Install</strong>
              <p className="text-xs text-gray-400 py-3">
                Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
              </p>
            </li>
            <li>
              ✅ <strong>100 Support Ticket</strong>
              <p className="text-xs text-gray-400 py-3">
                Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
              </p>
            </li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            GET STARTED NOW
          </button>
        </div>

        {/* Business Plan */}
        <div
          className="relative rounded-lg border border-blue-100 shadow-lg p-6 flex flex-col items-center space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-lg"></div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-b">
            RECOMMENDED
          </div>
          <h3 className="text-xl font-semibold">Business</h3>
          <div className="border-b-2 w-12 border-blue-500"></div>
          <p className="mt-2 text-gray-500">
            From <span className="line-through">$599</span> Per Month
          </p>
          <ul className="mt-6 space-y-20 text-gray-700 text-sm">
            <li>
              ✅ <strong>01 APPS Pack</strong>
              <p className="text-xs text-gray-400 py-3">
                Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
              </p>
            </li>
            <li>
              ✅ <strong>01 Free Apps Install</strong>
              <p className="text-xs text-gray-400 py-3">
                Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
              </p>
            </li>
            <li>
              ✅ <strong>100 Support Ticket</strong>
              <p className="text-xs text-gray-400 py-3">
                Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
              </p>
            </li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            GET STARTED NOW
          </button>
        </div>

        {/* Third Plan */}
        <div
          className="rounded-lg shadow p-6 flex flex-col items-center space-y-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-semibold">Title</h3>
          <div className="border-b-2 w-12 border-blue-500"></div>
          <p className="mt-2 text-gray-500">
            From <span className="line-through">$999</span> Per Month
          </p>
          <ul className="mt-6 space-y-20 text-gray-700 text-sm">
            <li>
              ✅ <strong>01 APPS Pack</strong>
              <p className="text-xs text-gray-400 py-3">
                Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
              </p>
            </li>
            <li>
              ✅ <strong>01 Free Apps Install</strong>
              <p className="text-xs text-gray-400 py-3">
                Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
              </p>
            </li>
            <li>
              ✅ <strong>100 Support Ticket</strong>
              <p className="text-xs text-gray-400 py-3">
                Curabitur ac lacus arcu. Sed vehicula lectus auctor viverra.
              </p>
            </li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            GET STARTED NOW
          </button>
        </div>
      </div>
    </div>
  );
}
