import Image from "next/image";
import Link from "next/link";
// ডাইনামিক পেজের গভীরতা অনুযায়ী একদম সঠিক রিলেটিভ পাথ
import products from "../../../../public/data.json"; 
import { notFound } from "next/navigation";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  // JSON ডাটা থেকে আইডি ম্যাচ করে নির্দিষ্ট প্রোডাক্টটি খুঁজে বের করা
  const product = products.find((item) => item.id == id);

  // যদি আইডি ম্যাচ না করে, তবে 404 পেজ দেখাবে
  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 my-6 md:my-12">
      
      {/* BACK BUTTON (টপ-লেফটে সুন্দর পজিশন) */}
      <div className="mb-6">
        <Link href="/">
          <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2 transition group">
            <span className="group-hover:-translate-x-1 transition duration-200">←</span> 
            Back to Products
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-3xl p-6 md:p-10 border border-gray-100">
        
        {/* 🔥 LEFT: IMAGE CONTAINER (জুমিং ইফেক্টসহ) */}
        <div className="relative w-full h-[350px] md:h-[450px] bg-gray-50 rounded-2xl overflow-hidden border border-gray-50 flex items-center justify-center group">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition duration-500"
            priority
          />
        </div>

        {/* 🔥 RIGHT: DETAILS INFO */}
        <div className="flex flex-col justify-between">
          <div>
            {/* CATEGORY & STOCK STATUS */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="bg-amber-100 text-amber-800 font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                {product.category || "Summer Special"}
              </span>

              {/* স্টক সিগন্যাল (কম থাকলে লাল, বেশি থাকলে সবুজ দেখাবে) */}
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                product.stock > 0 ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
              }`}>
                ● {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
              </span>
            </div>
            
            {/* PRODUCT NAME */}
            <h1 className="text-2xl md:text-4xl font-extrabold mt-4 text-gray-900 leading-tight">
              {product.name}
            </h1>
            
            {/* BRAND */}
            <p className="text-gray-400 text-sm mt-1 font-medium">
              Brand: <span className="text-gray-600">{product.brand || "Local Brand"}</span>
            </p>

            {/* ⭐️ RATING BADGE */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-xl">
                <span className="text-amber-500 text-sm">⭐</span>
                <span className="text-sm font-bold text-gray-800">
                  {product.rating ? product.rating.toFixed(1) : "4.5"}
                </span>
              </div>
              <span className="text-xs text-gray-400 font-medium">(Customer Review)</span>
            </div>

            <hr className="my-5 border-gray-100" />

            {/* PRICE */}
            <div className="bg-gray-50 p-4 rounded-2xl">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Price</p>
              <p className="text-3xl font-black text-amber-600 mt-1">
                BDT {product.price.toLocaleString()}
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mt-5 leading-relaxed text-sm md:text-base">
              {product.description || "No description available for this premium collection product."}
            </p>

            {/* KEY FEATURES (DETAILS LIST) */}
            {product.details && (
              <div className="mt-6">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-2">Key Features:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600">
                  {product.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-amber-500 font-bold">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ACTION BUTTON (অ্যাসাইনমেন্টের সৌন্দর্য বাড়াতে একটি ডামি অ্যাকশন বাটন) */}
          <div className="mt-8">
            <button 
              disabled={!product.stock}
              className={`w-full font-bold py-3.5 rounded-xl transition duration-300 shadow-md ${
                product.stock 
                  ? "bg-amber-400 hover:bg-amber-500 text-gray-900" 
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {product.stock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;