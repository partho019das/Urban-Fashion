import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 max-w-7xl mx-auto px-6 overflow-hidden">
      
     
      <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-[3/4] lg:aspect-video overflow-hidden rounded-2xl shadow-md border border-gray-100 animate__animated animate__backInLeft group">
        <Image 
          src="/full-length-portrait-young-man-summer-clothes.jpg" 
          alt="Summer collection banner"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          priority
          className="object-cover object-top group-hover:scale-105 transition duration-500"
        />
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

   
      <div className="w-full md:w-1/5 text-center flex flex-col items-center justify-center py-4 px-2 min-w-[180px]">
        <span className="text-amber-500 text-sm font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-2 animate__animated animate__fadeIn">
          Mega Sale
        </span>
        <h1 className="animate__animated animate__fadeInDownBig text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight">
          ☀️ Up to <br /> 
          <span className="text-amber-500 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">50% OFF!</span>
        </h1>
        <p className="text-xs text-slate-400 mt-2 font-medium max-w-[150px] hidden md:block">
          Upgrade your look with our limited summer collection.
        </p>
      </div>

  
      <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-[3/4] lg:aspect-video overflow-hidden rounded-2xl shadow-md border border-gray-100 animate__animated animate__backInRight group">
        <Image 
          src="/glamorous-pretty-women-posing-wearing-casual-winter-jackets.jpg" 
          alt="Winter collection banner"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          priority
          className="object-cover object-top group-hover:scale-105 transition duration-500"
        />
      
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

    </div>
  );
};

export default Hero;