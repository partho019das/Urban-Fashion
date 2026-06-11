"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import products from "../../public/data.json"; 

import 'swiper/css';
import 'swiper/css/pagination';

const Product = () => {
  const allProducts = products; 

  const pairs = [];
  for (let i = 0; i < allProducts.length; i += 2) {
    pairs.push(allProducts.slice(i, i + 2));
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 overflow-hidden bg-white">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold uppercase tracking-widest text-gray-900 mb-4 drop-shadow-sm">
          Popular Products
        </h1>
        <p className="text-slate-500 text-sm max-w-md mx-auto font-medium tracking-wide">
          Explore our highest-rated products crafted for ultimate comfort and style.
        </p>
      </motion.div>

      {/* Infinite Product Slider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1} 
          loop={true} 
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2, 
            },
            1024: {
              slidesPerView: 3, 
            }
          }}
          className="pb-14"
        >
          {pairs.map((pair, index) => (
            <SwiperSlide key={index} className="flex flex-col gap-6 py-2">
              {pair.map((item) => (
                <div
                  key={item.id}
                  className="w-full max-w-sm rounded-xl border border-gray-200/80 shadow-xl bg-white p-4 flex flex-col justify-between group transition-all duration-300 hover:border-amber-400 hover:shadow-2xl mx-auto"
                >
                  {/* IMAGE CONTAINER */}
                  <div className="relative w-full h-48 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                  </div>

                  {/* NAME */}
                  <h2 className="text-xl font-bold mt-4 text-center text-gray-800 tracking-wide line-clamp-1">
                    {item.name}
                  </h2>

                  {/* RATING & PRICE ROW */}
                  <div className="flex justify-between items-center mt-3 px-1">
                    {/* PRICE */}
                    <p className="font-bold text-amber-600 text-lg">
                      BDT: {item.price}
                    </p>
                    
                    {/* RATING */}
                    <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                      <span className="text-amber-500 text-sm">⭐</span>
                      <span className="text-sm font-bold text-gray-700">
                        {item.rating ? item.rating.toFixed(1) : "4.5"}
                      </span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <div className="text-center mt-5">
                    <Link href={`/product/${item.id}`} className="inline-block w-[160px]">
                      <button className="w-full py-2 rounded-xl bg-amber-300 border border-amber-300 hover:bg-amber-400 hover:border-amber-400 transition-all duration-300 font-bold text-gray-800 tracking-wide shadow-sm">
                        View Detail
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Product;