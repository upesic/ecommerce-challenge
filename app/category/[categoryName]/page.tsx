import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductItem from '@/components/ProductItem';
import { fetchProductsByCategory } from '@/lib/api';
import { Params } from '@/types';

export default async function CategoryPage({ params }: Params) {
  // await is added for warning in console
  const { categoryName } = await params;

  try {
    const products = await fetchProductsByCategory(categoryName);

    return (
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline">Back to Main Page</Link>
          <h1 className="text-3xl font-bold mt-4 capitalize">{decodeURIComponent(categoryName)}</h1>
          <p className="text-secondary mt-1">{products.length} products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length === 0 ? (
            <p>There are no products for selected category.</p>
          ) :
            products.map((product, index) => (
              <ProductItem key={product.id} image={product.image} price={product.price} title={product.title} id={product.id} priority={index === 0} />
            ))}
        </div>
      </main>
    );

  } catch (error) {
    console.error(error);
    return notFound();
  }
}