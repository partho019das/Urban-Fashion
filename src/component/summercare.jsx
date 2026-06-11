"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Summercare = () => {
    const trainTrackAnimation = `
        @keyframes trainRun {
            0% { offset-distance: 0%; }
            100% { offset-distance: 100%; }
        }
    `;

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 }, 
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-16 overflow-hidden bg-white">
            <style>{trainTrackAnimation}</style>

            {/* Section Header */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-extrabold uppercase tracking-wider text-gray-900 mb-3 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    Summer Care Essential
                </h2>
                <p className="text-slate-500 text-sm max-w-md mx-auto font-medium">
                    Stay protected and refreshed during the peak summer months with our core routine guide.
                </p>
            </motion.div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Card 1: SPF */}
                <motion.div 
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl bg-white border border-gray-200/80 shadow-xl flex flex-col items-center justify-center text-center transition-all duration-300 p-8 overflow-hidden group hover:border-amber-400"
                >
                    <div 
                        className="absolute w-24 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-yellow-300 pointer-events-none z-20 filter drop-shadow-[0_0_6px_rgba(234,179,8,0.6)]"
                        style={{
                            offsetPath: "rect(0% auto auto 0% round 16px)", 
                            animation: 'trainRun 6s linear infinite',
                        }}
                    />
                    
                    <div className="absolute inset-0 bg-amber-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 z-10 tracking-wide">
                        Defend Your Skin with SPF
                    </h3>
                    <p className="text-slate-600 text-base font-normal leading-relaxed max-w-md z-10">
                        Summer sun can be brutal, making high-quality sunscreen your absolute non-negotiable step. 
                        Apply a broad-spectrum SPF 30+ daily to shield your skin from intense UV damage, 
                        prevent premature aging, and keep your complexion clear and healthy.
                    </p>
                </motion.div>

                {/* Card 2: Hydration */}
                <motion.div 
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl bg-white border border-gray-200/80 shadow-xl flex flex-col items-center justify-center text-center transition-all duration-300 p-8 overflow-hidden group hover:border-sky-400"
                >
                    <div 
                        className="absolute w-24 h-[3px] bg-gradient-to-r from-transparent via-sky-400 to-cyan-300 pointer-events-none z-20 filter drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]"
                        style={{
                            offsetPath: "rect(0% auto auto 0% round 16px)", 
                            animation: 'trainRun 6s linear infinite',
                        }}
                    />
                    
                    <div className="absolute inset-0 bg-sky-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 z-10 tracking-wide">
                        Hydrate from the Inside Out
                    </h3>
                    <p className="text-slate-600 text-base font-normal leading-relaxed max-w-md z-10">
                        High heat means your body loses moisture fast, making hydration your ultimate energy and glow booster. 
                        Drink plenty of water throughout the day and load up on refreshing fruits like watermelon and cucumber 
                        to keep your skin plump and your body energized.
                    </p>
                </motion.div>

            </div>
        </div>
    );
};

export default Summercare;