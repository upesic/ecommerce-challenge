'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';


export default function Header() {
  const { getTotalCount } = useCart();
  const count = getTotalCount();
  return (
    <header className="bg-[#f3eee7] flex justify-between items-center px-8 py-4 shadow-md text-[#97784e]">
      <div className="text-2xl font-bold">IMPACT</div>
      <nav className="flex gap-6 items-center">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/cart" className="relative">
          <ShoppingCartIcon className='size-6' />
          <span className="absolute -top-2 -right-2 bg-[#96C346] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {count}
          </span>
        </Link>
      </nav>
    </header>
  );
}