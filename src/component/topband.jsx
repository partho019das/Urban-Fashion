"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper CSS Styles
import 'swiper/css';
import 'swiper/css/pagination';

const Topband = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16 overflow-hidden bg-white">
            
            {/* Section Header */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                {/* 💡 text-gray-900 করা হলো সাদা ব্যাকগ্রাউন্ডে স্পষ্ট দেখার জন্য */}
                <h1 className="text-4xl font-extrabold uppercase tracking-widest text-gray-900 mb-4 drop-shadow-sm">
                    Top Brands
                </h1>
                <p className="text-slate-500 text-sm max-w-md mx-auto font-medium tracking-wide">
                    Explore premium collections from top-tier brands crafted for your ultimate style statement.
                </p>
            </motion.div>
            
            {/* Infinite Carousel Slider */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="w-full"
            >
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1} 
                    loop={true} 
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2, 
                        }
                    }}
                    className="pb-12"
                >
                    {/* Brand 1 - Richman */}
                    <SwiperSlide className="flex justify-center">
                        <a 
                            href="https://www.richmanbd.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full max-w-sm p-5 rounded-xl border border-gray-200 shadow-xl bg-white block cursor-pointer group transition-all duration-300 hover:border-amber-400 hover:shadow-2xl"
                        >
                            <div>
                                <div className="overflow-hidden rounded-lg">
                                    <img className="mx-auto block h-64 w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" src="/richman.jfif" alt="Richman" />
                                </div>
                                <h1 className="text-2xl text-center font-bold mt-4 text-gray-800 tracking-wide"> Richman </h1>
                                <p className="mt-2 text-sm text-slate-500 italic text-center">Committed to Quality</p>
                                <h2 className="text-center text-slate-600 text-sm mt-1 font-medium">Premium Slim-Fit Blazer Collection</h2>
                                <p className="text-center mt-4 p-2 rounded bg-slate-100 group-hover:bg-amber-400 group-hover:text-gray-900 transition-colors text-gray-800 font-semibold tracking-wide">Price: ৳ 7999</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    {/* Brand 2 - Illiyeen */}
                    <SwiperSlide className="flex justify-center">
                        <a 
                            href="https://www.illiyeen.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full max-w-sm p-5 rounded-xl border border-gray-200 shadow-xl bg-white block cursor-pointer group transition-all duration-300 hover:border-amber-400 hover:shadow-2xl"
                        >
                            <div>
                                <div className="overflow-hidden rounded-lg">
                                    <img className="mx-auto block h-64 w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" src="/panjabi.webp" alt="Illiyeen" />
                                </div>
                                <h1 className="text-2xl text-center font-bold mt-4 text-gray-800 tracking-wide"> Illiyeen </h1>
                                <p className="mt-2 text-sm text-slate-500 font-medium tracking-wide uppercase text-center">The Art of Refinement</p>
                                <h2 className="text-center text-slate-600 text-sm mt-1 font-medium">Premium Cotton Panjabi</h2>
                                <p className="text-center mt-4 p-2 rounded bg-slate-100 group-hover:bg-amber-400 group-hover:text-gray-900 transition-colors text-gray-800 font-semibold tracking-wide">Price: ৳ 2999</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    {/* Brand 3 - Le Reve */}
                    <SwiperSlide className="flex justify-center">
                        <a 
                            href="https://www.lerevecraze.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full max-w-sm p-5 rounded-xl border border-gray-200 shadow-xl bg-white block cursor-pointer group transition-all duration-300 hover:border-amber-400 hover:shadow-2xl"
                        >
                            <div>
                                <div className="overflow-hidden rounded-lg">
                                    <img className="mx-auto block h-64 w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" src="/lee.jpg" alt="Le Reve" />
                                </div>
                                <h1 className="text-2xl text-center font-bold mt-4 text-gray-800 tracking-wide"> Le Reve </h1>
                                <p className="mt-2 text-sm text-slate-500 font-light tracking-wider text-center">Wear Your Monologue</p>
                                <h2 className="text-center text-slate-600 text-sm mt-1 font-medium">Premium T-shirt</h2>
                                <p className="text-center mt-4 p-2 rounded bg-slate-100 group-hover:bg-amber-400 group-hover:text-gray-900 transition-colors text-gray-800 font-semibold tracking-wide">Price: ৳ 1999</p>
                            </div>
                        </a>
                    </SwiperSlide>

                </Swiper>
            </motion.div>
        </div>
    );
};

export default Topband;