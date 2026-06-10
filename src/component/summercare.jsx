import React from 'react';

const Summercare = () => {
    // কার্ডের চারপাশে ট্রেনের মতো নিখুঁত বাঁক নেওয়ার অ্যানিমেশন
    const trainTrackAnimation = `
        @keyframes trainRun {
            0% { offset-distance: 0%; }
            100% { offset-distance: 100%; }
        }
    `;

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <style>{trainTrackAnimation}</style>

            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold uppercase tracking-wider text-foreground mb-3">
                    Summer Care Essential
                </h2>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                    Stay protected and refreshed during the peak summer months with our core routine guide.
                </p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Card 1: SPF */}
                <div className="relative rounded-2xl bg-default-50 border border-default-200/60 shadow-sm flex flex-col items-center justify-center text-center transition hover:shadow-md overflow-hidden p-8">
                    
                    {/* আসল ট্রেন (লম্বা লাইট যা কোণাগুলোতে নিখুঁতভাবে বাঁক নেবে, নিচে নেমে যাবে না) */}
                    <div 
                        className="absolute w-20 h-[2px] bg-gradient-to-r from-transparent via-[#eab308] to-[#fef08a] pointer-events-none z-20"
                        style={{
                            // offset-path কার্ডের চারদিকের বর্ডারলাইনকে একটা ট্র‍্যাক বানিয়ে দেয়
                            offsetPath: "rect(0% auto auto 0% round 16px)", 
                            animation: 'trainRun 5s linear infinite',
                        }}
                    />
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Defend Your Skin with SPF
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed max-w-md">
                        Summer sun can be brutal, making high-quality sunscreen your absolute non-negotiable step. 
                        Apply a broad-spectrum SPF 30+ daily to shield your skin from intense UV damage, 
                        prevent premature aging, and keep your complexion clear and healthy.
                    </p>
                </div>

                {/* Card 2: Hydration */}
                <div className="relative rounded-2xl bg-default-50 border border-default-200/60 shadow-sm flex flex-col items-center justify-center text-center transition hover:shadow-md overflow-hidden p-8">
                    
                    {/* আসল ট্রেন (লম্বা লাইট যা কোণাগুলোতে নিখুঁতভাবে বাঁক নেবে, নিচে নেমে যাবে না) */}
                    <div 
                        className="absolute w-20 h-[2px] bg-gradient-to-r from-transparent via-[#eab308] to-[#fef08a] pointer-events-none z-20"
                        style={{
                            offsetPath: "rect(0% auto auto 0% round 16px)", 
                            animation: 'trainRun 5s linear infinite',
                        }}
                    />
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Hydrate from the Inside Out
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed max-w-md">
                        High heat means your body loses moisture fast, making hydration your ultimate energy and glow booster. 
                        Drink plenty of water throughout the day and load up on refreshing fruits like watermelon and cucumber 
                        to keep your skin plump and your body energized.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Summercare;