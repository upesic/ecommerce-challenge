import { useCart } from '@/context/CartContext';
import { CartProductFooterProps } from '@/types';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function CartProductFooter({ productId, productQuantity }: CartProductFooterProps) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-2">
        <button
          className="cursor-pointer px-2 py-1 text-sm border-none rounded disabled:opacity-50 hover:bg-hover"
          onClick={() => updateQuantity(productId, productQuantity - 1)}
          disabled={productQuantity === 1}
        >-</button>
        <span className="w-6 text-center">{productQuantity}</span>
        <button
          className="px-2 py-1 text-sm border-none rounded cursor-pointer hover:bg-hover"
          onClick={() => updateQuantity(productId, productQuantity + 1)}
        >+</button>
      </div>
      <button onClick={() => removeFromCart(productId)} className="text-error cursor-pointer text-sm">
        <TrashIcon className='size-6' />
      </button>
    </div>
  )
}