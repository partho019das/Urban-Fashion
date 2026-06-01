import Image from "next/image";
import Link from "next/link";

const ProductDetails = async ({ params }) => {

  const { id } = await params;

  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const products = await res.json();

  const product = products.find(
    (item) => item.id == id
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={500}
      />

      <h1 className="text-4xl font-bold mt-6">
        {product.name}
      </h1>

      <p className="text-2xl font-semibold mt-3">
        Price: BDT {product.price}
      </p>

      <ul className="mt-5 list-disc ml-6">
        {product.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      <Link href="/">
        <button className="bg-gray-300 px-4 py-2 rounded mt-6">
          Back
        </button>
      </Link>

    </div>
  );
};

export default ProductDetails;