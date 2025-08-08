
// components/WhyChooseIt.tsx
  "use client"
import { useEffect } from "react";
import { CheckCircle, Clock, RefreshCw } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Benefits() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div
          className="flex-1 flex justify-center"
          data-aos="fade-right"
        >
          <Image
            src="/ipad-mockup.png"
            alt="Why Choose It"
            width={400}
            height={400}
            className=""
          />
        </div>

        {/* Right Side Content */}
        <div
          className="flex-1 text-left"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-20 ml-20 md:ml-0 mt-20 md:mt-0">
            <span className="text-black border-l-8 border-blue-500 pl-2">
              WHY CHOOSE IT
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-20 text-justify mx-5">
            Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject, 
            was sufficient to draw from her husband any satisfactory description of Mr. Bingley...
          </p>

          {/* Features */}
          <ul className="space-y-8">
            <li
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Clock className="text-blue-500 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-2xl">24H SUPPORT</h4>
                <p className="text-gray-600 text-sm py-3">
                  Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject.
                </p>
              </div>
            </li>

            <li
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <RefreshCw className="text-blue-500 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-2xl">REGULAR UPDATES</h4>
                <p className="text-gray-600 text-sm py-3">
                  Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject.
                </p>
              </div>
            </li>

            <li
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CheckCircle className="text-blue-500 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-2xl">MANY BROWSER</h4>
                <p className="text-gray-600 text-sm py-3">
                  Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
