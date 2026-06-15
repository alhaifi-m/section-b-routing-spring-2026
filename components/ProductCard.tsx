import React from "react";
import type { Product } from "@/lib/data";
import Link from "next/link";

type ProductProps = { product: Product };
const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm-flex flex-col gap-3">
      {/* Category Badge */}
      <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full self-start">
        {product.category}
      </span>
      <h2 className="text-base font-bold text-slate-900">{product.name}</h2>
      <p className="text-sm text-slate-500 flex-1">{product.description}</p>
      <div className="flex items-center justify-between mt-1">
        <strong className="text-xl text-slate-900">${product.price}</strong>
        <span
          className={`text-xs font-semi-bold px-2 py-0.5 rounded-full ${product.inStock ? "bg-emerald-100 " : "bg-red-100"}`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <Link
        href={`/products/${product.id}`}
        className="mt-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibod text-center px-4 py-2 rounded-lg mt-5 "
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
