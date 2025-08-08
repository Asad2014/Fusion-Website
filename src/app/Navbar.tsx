
'use client';

import React, { useState } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="bg-[#0284c7] text-white py-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="https://shtheme.com/demosd/fusion/wp-content/uploads/2022/12/logo-white.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 font-bold text-gray-200">
          <Link href="/home">Home</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/features">Features</Link>
          <Link href="/team">Team</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/screenshot">Screenshot</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop Search Icon */}
        <div className="hidden md:block">
          <IoSearch
            size={20}
            className="text-black cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX size={24} className="text-white" />
            ) : (
              <FiMenu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div
        className={`absolute top-full left-0 w-full bg-[#00AEEF] shadow-md z-50 overflow-hidden transition-all duration-300 ${
          showSearch ? "max-h-20 p-3" : "max-h-0 p-0"
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 p-2 rounded text-black"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-4 text-center font-bold text-white pb-4">
          <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/downloads" onClick={() => setIsOpen(false)}>Downloads</Link>
          <Link href="/features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="/team" onClick={() => setIsOpen(false)}>Team</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/screenshot" onClick={() => setIsOpen(false)}>Screenshot</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

