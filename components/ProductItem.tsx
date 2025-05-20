'use client'

import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface ProductItemProps {
  id: number;
  image?: string;
  title: string;
  price: number;
}

export default function ProductItem(props: ProductItemProps) {
  const { id, image, title, price } = props;
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-semibold text-lg mb-2">{title}</h2>
          <p className="text-[#e89830] font-bold">${price}</p>
        </div>
        <button onClick={() => addToCart({ id, title, price, image, quantity: 1 })} className="mt-6 bg-[#e89830] text-white font-semibold px-4 py-2 rounded hover:bg-[#d48a28] transition cursor-pointer w-1/2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}