'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaTwitter,
  FaTumblr,
  FaVimeoV,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
  FaRss
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-[#00AEEF] text-white pt-6">
      {/* Social Icons */}
      <div
        className="flex flex-wrap justify-center gap-10 mb-4 text-gray-700"
        data-aos="fade-right"
      >
        <FaFacebookF className="cursor-pointer hover:text-gray-200" data-aos="fade-up" data-aos-delay="100" />
        <FaTwitter className="cursor-pointer hover:text-gray-200" data-aos="fade-up" data-aos-delay="200" />
        <FaTumblr className="cursor-pointer hover:text-gray-200" data-aos="fade-up" data-aos-delay="300" />
        <FaVimeoV className="cursor-pointer hover:text-gray-200" data-aos="fade-up" data-aos-delay="400" />

        <div className="flex justify-center gap-10 w-full md:w-auto">
          <FaLinkedinIn className="cursor-pointer hover:text-gray-200" data-aos="fade-up" data-aos-delay="500" />
          <FaDribbble className="cursor-pointer hover:text-gray-200" data-aos="fade-up" data-aos-delay="600" />
          <FaInstagram className="cursor-pointer hover:text-gray-200" data-aos="fade-up" data-aos-delay="700" />
          <FaRss className="cursor-pointer hover:text-gray-200" data-aos="fade-up" data-aos-delay="800" />
        </div>
      </div>

      <hr className="border-t border-white opacity-20 w-11/12 mx-auto mb-6" data-aos="fade-left" />

      {/* Logo */}
      <h1 className="text-4xl font-bold text-center mb-4" data-aos="zoom-in">
        FUSION
      </h1>

      {/* Copyright */}
      <p className="text-center text-sm mb-4 px-2" data-aos="fade-up" data-aos-delay="200">
        <span className="font-semibold">Copyright 2024</span> FUSION &nbsp; | &nbsp; All Rights Reserved &nbsp; | &nbsp;
        <span className="font-semibold">Designed By</span> Shtheme
      </p>

      {/* Description */}
      <p
        className="text-center text-sm max-w-2xl mx-auto px-4 mb-6 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Penatibus tristique velit vestibulum adipiscing habitant aenean feugiat at condimentum aptent odio orci
        vulputate hac mollis a. Vestibulum adipiscing gravida justo a ac euismod vitae.
      </p>

      {/* Nav Links */}
      <div className="bg-[#0284c7] py-4" data-aos="fade-left">
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <Link href="/home" data-aos="fade-up" data-aos-delay="100">Home</Link>
          <Link href="/features" data-aos="fade-up" data-aos-delay="200">Features</Link>
          <Link href="/downloads" data-aos="fade-up" data-aos-delay="300">Download</Link>
          <Link href="/team" data-aos="fade-up" data-aos-delay="400">Team</Link>

          <div className="flex justify-center gap-6 w-full md:w-auto">
            <Link href="/pricing" data-aos="fade-up" data-aos-delay="500">Pricing</Link>
            <Link href="/screenshot" data-aos="fade-up" data-aos-delay="600">Screenshot</Link>
            <Link href="/blog" data-aos="fade-up" data-aos-delay="700">Blog</Link>
            <Link href="/contact" data-aos="fade-up" data-aos-delay="800">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
