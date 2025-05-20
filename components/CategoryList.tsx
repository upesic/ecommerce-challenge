import CategoryItem from './CategoryItem';

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
          <CategoryItem key={cat} name={cat} />
        ))}
      </div>
    </section>
  );
}