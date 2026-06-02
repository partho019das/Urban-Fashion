import Image from "next/image";
import Link from "next/link";
// আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী ১০০% সঠিক রিলেটিভ পাথ
import products from "../../public/data.json"; 

const Product = () => {
  const allProducts = products; 

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-center mt-4 text-gray-800">
        Popular Products
      </h1>
      <p className="text-center text-slate-400 p-1">
        Explore our highest-rated products crafted for ultimate comfort and style.
      </p>

      {/* 🔥 GRID SYSTEM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {allProducts.map((item) => (
          <div
            key={item.id}
            className="w-full h-full shadow-lg p-4 rounded-xl flex flex-col justify-between bg-white border border-gray-100 relative"
          >
            {/* IMAGE */}
            <div className="relative w-full h-52 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover hover:scale-105 transition duration-300"
                sizes="(max-w-768px) 100vw, 33vw"
              />
            </div>

            {/* NAME */}
            <h2 className="text-lg font-bold mt-3 text-center text-gray-800 line-clamp-1">
              {item.name}
            </h2>

            {/* ⭐️ RATING & PRICE ROW */}
            <div className="flex justify-between items-center mt-2 px-2">
              {/* PRICE */}
              <p className="font-bold text-amber-600">
                BDT: {item.price}
              </p>
              
              {/* ✅ RATING (এটি নতুন যোগ করা হয়েছে) */}
              <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
                <span className="text-amber-500 text-sm">⭐</span>
                <span className="text-sm font-semibold text-gray-700">
                  {item.rating ? item.rating.toFixed(1) : "4.5"}
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <div className="text-center mt-4">
              <Link href={`/product/${item.id}`}>
                <button className="bg-amber-300 hover:bg-amber-400 transition p-2 rounded-xl w-[150px] font-semibold text-gray-800">
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