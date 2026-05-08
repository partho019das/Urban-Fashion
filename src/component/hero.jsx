import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex justify-center items-center w-full mt-10">
            <Image 
                src="/benner.jpg" 
                alt="banner"
                width={1200}
                height={500}
                className="w-full max-w-6xl h-auto"
            />
        </div>
    );
};

export default Hero;