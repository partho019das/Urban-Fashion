"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-100 py-16 px-6 w-full font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* LOGO & BRAND DESCRIPTION */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-black tracking-wider text-gray-900">
            <span className="bg-gray-900 text-white px-2.5 py-1 rounded-md text-2xl mr-1">
              URBAN
            </span>{" "}
            <span className="text-amber-500">FASHION</span>
          </h1>
          <p className="text-slate-500 text-sm mt-4 max-w-sm font-medium leading-relaxed">
            Trendy Fashion For Modern Lifestyle. Crafting premium quality apparel that defines your ultimate comfort and style statement.
          </p>
        </div>

        {/* QUICK NAVIGATION MENU */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
            Explore Fashion
          </h2>
          <ul className="space-y-3 font-semibold text-gray-600 text-base">
            <li>
              <Link href="/" className="hover:text-amber-500 transition-colors duration-300 block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-amber-500 transition-colors duration-300 block">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/new-arrivals" className="hover:text-amber-500 transition-colors duration-300 block">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-500 transition-colors duration-300 block">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL LINKS & NEWSLETTER */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
            Follow Our Journey
          </h2>
          <div className="flex gap-4 text-xl">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-slate-50 border border-gray-200/60 flex items-center justify-center text-gray-600 hover:text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-sm"
            >
              <FaFacebookF size={16} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-slate-50 border border-gray-200/60 flex items-center justify-center text-gray-600 hover:text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-sm"
            >
              <FaInstagram size={16} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-slate-50 border border-gray-200/60 flex items-center justify-center text-gray-600 hover:text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-sm"
            >
              <FaTwitter size={16} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-slate-50 border border-gray-200/60 flex items-center justify-center text-gray-600 hover:text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-sm"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT & BOTTOM BAR */}
      <div className="max-w-6xl mx-auto border-t border-gray-100 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-semibold tracking-wider">
        <div>
          &copy; {new Date().getFullYear()} URBAN FASHION. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6 text-slate-400">
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;