
'use client';

import React from "react";
import Link from "next/link";
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
  return (
    <footer className="bg-[#00AEEF] text-white pt-6" data-aos="fade-up">
      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-10 mb-4 text-gray-700" data-aos="fade-up" data-aos-delay="100">
        <FaFacebookF className="cursor-pointer hover:text-gray-200" />
        <FaTwitter className="cursor-pointer hover:text-gray-200" />
        <FaTumblr className="cursor-pointer hover:text-gray-200" />
        <FaVimeoV className="cursor-pointer hover:text-gray-200" />

        <div className="flex justify-center gap-10 w-full md:w-auto">
          <FaLinkedinIn className="cursor-pointer hover:text-gray-200" />
          <FaDribbble className="cursor-pointer hover:text-gray-200" />
          <FaInstagram className="cursor-pointer hover:text-gray-200" />
          <FaRss className="cursor-pointer hover:text-gray-200" />
        </div>
      </div>

      <hr className="border-t border-white opacity-20 w-11/12 mx-auto mb-6" />

      {/* Logo */}
      <h1 className="text-4xl font-bold text-center mb-4" data-aos="zoom-in">FUSION</h1>

      {/* Copyright */}
      <p className="text-center text-sm mb-4 px-2" data-aos="fade-up" data-aos-delay="200">
        <span className="font-semibold">Copyright 2024</span> FUSION &nbsp; | &nbsp; All Rights Reserved &nbsp; | &nbsp;
        <span className="font-semibold">Designed By</span> Shtheme
      </p>

      {/* Description */}
      <p className="text-center text-sm max-w-2xl mx-auto px-4 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
        Penatibus tristique velit vestibulum adipiscing habitant aenean feugiat at condimentum aptent odio orci
        vulputate hac mollis a. Vestibulum adipiscing gravida justo a ac euismod vitae.
      </p>

      {/* Nav Links */}
      <div className="bg-[#0284c7] py-4" data-aos="fade-up" data-aos-delay="400">
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <Link href="/home">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/downloads">Download</Link>
          <Link href="/team">Team</Link>

          <div className="flex justify-center gap-6 w-full md:w-auto">
            <Link href="/pricing">Pricing</Link>
            <Link href="/screenshot">Screenshot</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
