import { Link, Button } from "@heroui/react";
import Image from "next/image";

const Navber = () => {
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          
          <div className="flex items-center gap-3">
            <Image src="/1.jpg" alt="logo" width={50} height={50} />
            <p className="font-bold">Dress Zoon</p>
          </div>

          <ul className="flex items-center gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/my-profile">My profile</Link></li>
          </ul>

        </header>
      </nav>
    </div>
  );
};

export default Navber;