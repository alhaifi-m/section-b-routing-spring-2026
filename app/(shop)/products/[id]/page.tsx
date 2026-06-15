import { getProductById, getAllProducts } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ id: p.id }));
}

const ProductDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  // get the requested product data
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-2xl">
      <Link
        href="/products"
        className="text-slate-500 hover:text-slate-700 text-sm"
      >
        Back to Products
      </Link>
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mt-6">
        <span className="inline-block text-sx font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full mb-4">
          {product.category}
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{product.name}</h1>
        <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>
        <div className="flex items-center gap-4 mt-4">
            <span className="text-4xl font-extrabold text-slate-900">
                ${product.price}
            </span>
            <span 
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${product.inStock ? 'bg-emerald-100 text-emerald-700':'bg-red-100 text-red-700'}`}
            >{product.inStock ? "In stock" : "Out of Stock"}</span>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
