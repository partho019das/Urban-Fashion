import React from 'react';

const Topband = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold p-5'>Top Brands</h1>
            <p className='text-center text-slate-400'>Explore premium collections from top-tier brands crafted for your ultimate style statement.</p>
            
            <div className='flex p-5 gap-10 justify-center w-full flex-wrap'>
                
                {/* Product 1 - Richman */}
                {/* rel="noopener noreferrer" ব্যবহার করা সিকিউরিটির জন্য ভালো */}
                <a href="https://www.richmanbd.com/" target="_blank" rel="noopener noreferrer" 
                   className='w-80 p-4 border rounded-xl shadow-2xl mb-2 bg-white block hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    <div>
                        <img className='mx-auto block h-64 object-cover rounded-lg' src="/richman.jfif" alt="Richman" />
                        <h1 className='text-2xl text-center font-semibold mt-3 text-gray-900'> Richman </h1>
                        <p className="mt-3 text-base text-slate-500 italic text-center">Committed to Quality</p>
                        <h2 className='text-center text-slate-500'>Premium Slim-Fit Blazer Collection</h2>
                        <p className='text-center mt-2 p-1 rounded bg-slate-100 hover:bg-amber-400 transition-colors text-gray-800 font-medium'>Price: ৳ 7999</p>
                    </div>
                </a>

                {/* Product 2 - Illiyeen */}
                <a href="https://www.illiyeen.com/" target="_blank" rel="noopener noreferrer" 
                   className='w-80 p-4 border rounded-xl shadow-2xl mb-2 bg-white block hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    <div>
                        <img className='mx-auto block h-64 object-cover rounded-lg' src="/panjabi.webp" alt="Illiyeen" />
                        <h1 className='text-2xl text-center font-semibold mt-3 text-gray-900'> Illiyeen </h1>
                        <p className="mt-3 text-base text-slate-500 font-medium tracking-wide uppercase text-center">The Art of Refinement</p>
                        <h2 className='text-center text-slate-500'>Premium Cotton Panjabi</h2>
                        <p className='text-center mt-2 p-1 rounded bg-slate-100 hover:bg-amber-400 transition-colors text-gray-800 font-medium'>Price: ৳ 2999</p>
                    </div>
                </a>

                {/* Product 3 - Le Reve */}
                <a href="https://www.lerevecraze.com/" target="_blank" rel="noopener noreferrer" 
                   className='w-80 p-4 border rounded-xl shadow-2xl mb-2 bg-white block hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    <div>
                        <img className='mx-auto block h-64 object-cover rounded-lg' src="/lee.jpg" alt="Le Reve" />
                        <h1 className='text-2xl text-center font-semibold mt-3 text-gray-900'> Le Reve </h1>
                        <p className="mt-3 text-base text-slate-500 font-light tracking-wider text-center">Wear Your Monologue</p>
                        <h2 className='text-center text-slate-500'>Premium T-shirt</h2>
                        <p className='text-center mt-2 p-1 rounded bg-slate-100 hover:bg-amber-400 transition-colors text-gray-800 font-medium'>Price: ৳ 1999</p>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default Topband;