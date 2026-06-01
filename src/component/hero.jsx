import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex justify-center items-center gap-3 mt-10 max-w-full mx-auto px-4">
            {/* প্রথম ইমেজ কন্টেইনার */}
            <div className="relative w-1/2 aspect-[4/3] sm:aspect-video overflow-hidden rounded-lg">
                <Image 
                    src="/full-length-portrait-young-man-summer-clothes.jpg" 
                    alt="Summer collection banner"
                    fill
                    sizes="(max-width: 768px) 50vw, 600px"
                    priority
                    className="object-cover object-top"
                />
            </div>

            {/* দ্বিতীয় ইমেজ কন্টেইনার */}
            <div className="relative w-1/2 aspect-[4/3] sm:aspect-video overflow-hidden rounded-lg">
                <Image 
                    src="/glamorous-pretty-women-posing-wearing-casual-winter-jackets.jpg" 
                    alt="Winter collection banner"
                    fill
                    sizes="(max-width: 768px) 50vw, 600px"
                    priority
                    className="object-cover object-top"
                />
            </div>
        </div>
    );
};

export default Hero;