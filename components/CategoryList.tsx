import { fetchCategories } from '@/lib/api';
import CategoryItem from './CategoryItem';

export default async function CategoryList() {

  try {
    const categories = await fetchCategories();

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
  } catch (error) {
    return (
      <section className="w-full max-w-6xl mx-auto text-center py-10">
        <p className="text-error font-medium">Sorry, we are unable to load categories at the moment. Please try again later.</p>
      </section>
    );
  }


}