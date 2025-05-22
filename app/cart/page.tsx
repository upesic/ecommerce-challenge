'use client';

import CartProduct from '@/components/CartProduct';
import Spinner from '@/components/Spinner';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { items, isLoaded } = useCart();

  if (!isLoaded) {
    return <Spinner />
  }
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/" className="text-primary hover:underline">Add more products</Link>
      <h1 className="text-3xl font-bold mb-6 mt-4">Your cart</h1>
      {items.length === 0 ? (
        <p className="text-text-secondary">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 bg-background-secondary p-4 rounded-xl">
          {items.map((item) => (
            <CartProduct key={item.id} item={item} />
          ))}
          <div className="text-right text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </main>
  );
}
