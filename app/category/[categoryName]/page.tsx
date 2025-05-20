import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductItem from '@/components/ProductItem';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Params {
  params: {
    categoryName: string;
  };
}

export default async function CategoryPage({ params }: Params) {
  const { categoryName } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);

  if (!res.ok) return notFound();

  const products: Product[] = await res.json();
  if (products.length === 0) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <Link href="/" className="text-[#e89830] hover:underline">Back to Main Page</Link>
        <h1 className="text-3xl font-bold mt-4 capitalize">{decodeURIComponent(categoryName)}</h1>
        <p className="text-[#97784e] mt-1">{products.length} products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductItem key={product.id} image={product.image} price={product.price} title={product.title} />
        ))}
      </div>
    </main>
  );
}