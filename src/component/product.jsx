import Image from "next/image";
import Link from "next/link";

const Product = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const product = await res.json();

  return (
    <div className="px-4 py-6">

      <h1 className="text-3xl font-bold text-center mt-4">
        Popular Products
      
      </h1>
        <p className="text-center text-slate-400 p-1">Explore our highest-rated products crafted for ultimate comfort and style.</p>

      {/* 🔥 4 COLUMN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">

        {product.map((item) => (
          <div
            key={item.id}
            className="w-full h-full shadow-lg p-4 rounded-xl flex flex-col justify-between bg-white"
          >

            {/* IMAGE */}
            <div className="relative w-full h-52 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* NAME */}
            <h2 className="text-lg font-bold mt-3 text-center">
              {item.name}
            </h2>

            {/* PRICE */}
            <p className="text-center font-bold">
              BDT: {item.price}
            </p>

            {/* BUTTON */}
            <div className="text-center mt-4">

              <Link href={`/products/${item.id}`}>
                <button className="bg-amber-300 hover:bg-amber-400 transition p-2 rounded-xl w-[150px] font-semibold">
                  View Detail
                </button>
              </Link>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Product;