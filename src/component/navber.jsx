"use client";

import React, { useState, useEffect } from 'react'; 
import { authClient } from "@/lib/auth-client"; 
import { Link } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-white/10 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* টপ অ্যানিমেটেড কালারফুল বর্ডার লাইন */}
      <div className="h-[3px] w-full bg-gradient-to-r from-pink-500 via-purple-500 via-sky-500 to-emerald-500 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo with Glow and Hover Animation */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform duration-500 group-hover:rotate-[360deg] filter drop-shadow-[0_0_8px_rgba(14,165,233,0.6)]">
            <Image
              src="/Gemini_Generated_Image_oik5j8oik5j8oik5-removebg-preview.png"
              alt="Urban Fashion Logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>

          <span className="font-extrabold text-xl tracking-widest uppercase hidden sm:block bg-gradient-to-r from-sky-400 via-pink-500 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-[gradient_2s_linear_infinite]">
            Urban Fashion
          </span>
        </Link>

        {/* Colorful & Animated Menu Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="relative text-sm font-semibold text-zinc-300 hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>

          <button className="relative text-sm font-semibold text-zinc-300 hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300">
            Products
          </button>

          {mounted && session?.user && (
            <Link
              href="/profile"
              className="relative text-sm font-semibold text-zinc-300 hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              My Profile
            </Link>
          )}
        </div>

        {/* Right Side UI Buttons */}
        <div className="flex items-center gap-4">
          {!mounted || isPending ? (
            <div className="w-6 h-6 border-3 border-sky-500 border-t-transparent rounded-full animate-spin" />
          ) : session?.user ? (
            <>
              {/* Profile Avatar with Moving Border Glow */}
              <Link href="/profile" className="relative p-[2px] rounded-full bg-gradient-to-tr from-sky-400 to-purple-500 animate-[spin_4s_linear_infinite] hover:scale-110 transition-transform duration-300">
                <div className="rounded-full p-[1px] bg-black animate-[spin_4s_linear_infinite_reverse]">
                  {session.user.image && (session.user.image.startsWith("http://") || session.user.image.startsWith("https://")) ? (
                    <div className="relative w-9 h-9 rounded-full overflow-hidden">
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "Profile"}
                        fill
                        sizes="36px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                      {session.user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                </div>
              </Link>

              {/* Neo-brutalism Animated Logout Button */}
              <button
                onClick={handleLogout}
                className="relative px-4 py-1.5 overflow-hidden font-semibold text-sm text-white rounded-lg bg-zinc-900 border border-red-500/40 hover:border-red-500 transition-all duration-300 before:absolute before:inset-0 before:translate-x-[-100%] hover:before:translate-x-0 before:bg-gradient-to-r before:from-red-600 before:to-pink-600 before:transition-transform before:duration-300 before:-z-10 z-10 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Vibrant Colorful Sign Up & Login Buttons */}
              <Link
                href="/signup"
                className="px-4 py-1.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_4px_15px_rgba(14,165,233,0.4)]"
              >
                Sign Up
              </Link>

              <Link
                href="/login"
                className="px-4 py-1.5 text-sm font-semibold text-zinc-200 rounded-lg border border-zinc-700 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;