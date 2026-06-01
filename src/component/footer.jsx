import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 w-full">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LOGO */}
        <div>
          <h1 className="text-3xl font-bold">
            <span className="bg-white text-black px-2 py-1 rounded">
              YOURBAN
            </span>{" "}
            <span className="text-amber-600">FASHION</span>
          </h1>

          <p className="text-gray-400 mt-3">
            Trendy Fashion For Modern Lifestyle
          </p>
        </div>

        {/* MENU */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4 text-amber-300">
            FASHION
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-amber-500 cursor-pointer transition">Home</li>
            <li className="hover:text-amber-500 cursor-pointer transition">Shop</li>
            <li className="hover:text-amber-500 cursor-pointer transition">New Arrivals</li>
            <li className="hover:text-amber-500 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-xl font-semibold mb-4 text-amber-300">
            Follow Us
          </h2>

          <div className="flex gap-5 text-2xl">
            <FaFacebookF className="hover:text-amber-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-amber-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-amber-500 cursor-pointer transition" />
            <FaYoutube className="hover:text-amber-500 cursor-pointer transition" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2026 YOURBAN FASHION
      </div>

    </footer>
  );
};

export default Footer;