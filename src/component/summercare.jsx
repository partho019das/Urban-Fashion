import React from 'react';

const Summercare = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
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
                <div className="p-8 rounded-2xl bg-default-50 border border-default-100 shadow-sm flex flex-col items-center  justify-center text-center transition hover:shadow-md">
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
                <div className="p-8 rounded-2xl bg-default-50 border border-default-100 shadow-sm flex flex-col items-center justify-center text-center transition hover:shadow-md">
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