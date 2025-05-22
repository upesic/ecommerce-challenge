'use client'

import { useCart } from '@/context/CartContext';
import { ProductItemProps } from '@/types';
import ItemImageContainer from './ItemImageContainer';
import Button from './Button';
import { useToast } from '@/context/ToastContext';

export default function ProductItem(props: ProductItemProps) {
  const { id, image, title, price, priority } = props;
  const { addToCart } = useCart();
  const { showToast } = useToast();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <ItemImageContainer image={image} title={title} containerClassname={'aspect-video'} imageClassName={'p-4'} priority={priority} />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-semibold text-lg mb-2 text-secondary">{title}</h2>
          <p className="font-bold">${price}</p>
        </div>
        <Button onClick={() => {
          addToCart({ id, title, price, image, quantity: 1 })
          showToast(`Product is added to cart`);
        }} className='mt-6 w-1/2'>Add to cart</Button>
      </div>
    </div>
  );
}