"use client";

import { Link } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <div className="relative w-10 h-10">
            <Image
              src="/Gemini_Generated_Image_oik5j8oik5j8oik5-removebg-preview.png"
              alt="Urban Fashion Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="font-bold text-xl tracking-wider uppercase hidden sm:block">
            Urban Fashion
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            color="foreground"
            className="text-sm font-medium hover:opacity-80 transition"
          >
            Home
          </Link>

          <button className="text-sm font-medium hover:opacity-80 transition">
            Products
          </button>

          <Link
            href="/profile"
            color="foreground"
            className="text-sm font-medium hover:opacity-80 transition"
          >
            My Profile
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/signup">Sign Up</Link>
          <Link href="/login">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;