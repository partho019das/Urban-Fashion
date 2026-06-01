import { Link, Button } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    // এখানে border-b এবং border-default-100 বাদ দেওয়া হয়েছে
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* লোগো এবং ব্র্যান্ড নেম */}
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <div className="relative w-10 h-10">
            <Image 
              src="/Gemini_Generated_Image_oik5j8oik5j8oik5-removebg-preview.png" 
              alt="Urban Fashion Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-xl tracking-wider uppercase hidden sm:block">
            Urban Fashion
          </span>
        </Link>

        {/* নেভিগেশন মেনু লিংকস */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" color="foreground" className="text-sm font-medium hover:opacity-80 transition">Home</Link>
         <button>Products </button>
          <Link href="#" color="foreground" className="text-sm font-medium hover:opacity-80 transition">My Profile</Link>
        </div>

        {/* অ্যাকশন বাটন (Login / Cart) */}
        <div className="flex items-center gap-4">
          <Button as={Link} href="#" variant="light" className="font-medium">
            Login
          </Button>
          <Button as={Link} href="#" color="primary" radius="full" className="font-medium shadow-md">
            Shop Now
          </Button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;