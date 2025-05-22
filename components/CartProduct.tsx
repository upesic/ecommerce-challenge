import CartProductFooter from './CartProductFooter';
import { CartProductProps } from '@/types';
import ItemImageContainer from './ItemImageContainer';


export default function CartProduct({ item }: CartProductProps) {
  const { id, title, image, price, quantity } = item;

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded shadow-md gap-4">
      <ItemImageContainer image={image} title={title} containerClassname={'w-32 h-32'} />
      <div className="flex-1 w-full">
        <h2 className="font-semibold text-lg mb-1 text-secondary">{title}</h2>
        <p className="font-bold mb-2">${price}</p>
        <CartProductFooter productId={id} productQuantity={quantity} />
      </div>
    </div>
  )
}