import Link from 'next/link';
import Image from 'next/image';

const imageMap: Record<string, string> = {
  electronics: '/images/electronics.jpg',
  jewelery: '/images/jewelery.jpg',
  "men's clothing": '/images/men-clothing.jpg',
  "women's clothing": '/images/women-clothing.jpg',
};

export default async function CategoryList() {
  let categories: string[] = [];

  try {
    const res = await fetch('https://fakestoreapi.com/products/categories', {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch categories');

    categories = await res.json();
  } catch (error) {
    return (
      <section className="w-full max-w-6xl mx-auto text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Explore by Category</h2>
        <p className="text-red-600 font-medium">Sorry, we're unable to load categories at the moment. Please try again later.</p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Explore by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link key={cat} href={`/category/${encodeURIComponent(cat)}`}>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer bg-white">
              <div className="aspect-video relative w-full">
                <Image
                  src={imageMap[cat]}
                  alt={cat}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center font-semibold capitalize text-[#97784e]">{cat}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}