import { CartItem } from '@/context/CartContext';
import Image from 'next/image';
import CartProductFooter from './CartProductFooter';

interface CartProductProps {
  item: CartItem
};

export default function CartProduct({ item }: CartProductProps) {
  const { id, title, image, price, quantity } = item;

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded shadow-md gap-4">
      <div className="relative w-32 h-32">
        {image ? (
          <Image src={image} alt={title} fill className="object-contain" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
        )}
      </div>
      <div className="flex-1 w-full">
        <h2 className="font-semibold text-lg mb-1 text-[#97784e]">{title}</h2>
        <p className="font-bold mb-2">${price}</p>
        <CartProductFooter productId={id} productQuantity={quantity} />
      </div>
    </div>
  )
}