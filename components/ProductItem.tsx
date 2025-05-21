'use client'

import { useCart } from '@/context/CartContext';
import { ProductItemProps } from '@/types';
import Image from 'next/image';

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
          <div className="w-full h-full flex items-center justify-center text-text-secondary">
            No Image
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-semibold text-lg mb-2 text-secondary">{title}</h2>
          <p className="font-bold">${price}</p>
        </div>
        <button onClick={() => addToCart({ id, title, price, image, quantity: 1 })} className="mt-6 bg-primary text-white font-semibold px-4 py-2 rounded hover:bg-hover-primary transition cursor-pointer w-1/2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}