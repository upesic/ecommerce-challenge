'use client';

import CartProduct from '@/components/CartProduct';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 bg-[#f3eee7] p-4 rounded-xl">
          {items.map((item) => (
            <CartProduct key={item.id} item={item} />
          ))}
          <div className="text-right text-xl font-bold text-[#1b150e]">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </main>
  );
}
