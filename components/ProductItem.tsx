'use client'

import { useCart } from '@/context/CartContext';
import { ProductItemProps } from '@/types';
import ItemImageContainer from './ItemImageContainer';

export default function ProductItem(props: ProductItemProps) {
  const { id, image, title, price, priority } = props;
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <ItemImageContainer image={image} title={title} containerClassname={'aspect-video'} imageClassName={'p-4'} priority={priority} />
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