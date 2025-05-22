import CategoryList from '../components/CategoryList';

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 py-10">
      <section className="w-full max-w-6xl text-center mb-12">
        <h1 className="text-4xl font-black mb-2">Welcome to IMPACT Web Shop</h1>
        <p className="text-lg text-text-secondary">Explore our selection of electronics, clothing and accessories</p>
      </section>
      <CategoryList />
    </div>
  );
}
