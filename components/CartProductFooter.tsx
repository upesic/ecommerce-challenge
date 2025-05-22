import { useCart } from '@/context/CartContext';
import { CartProductFooterProps } from '@/types';
import { TrashIcon } from '@heroicons/react/24/outline';
import Button from './Button';

export default function CartProductFooter({ productId, productQuantity }: CartProductFooterProps) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-2">
        <Button variant={'secondary'} disabled={productQuantity === 1} onClick={() => updateQuantity(productId, productQuantity - 1)}>-</Button>
        <span className="w-6 text-center">{productQuantity}</span>
        <Button variant={'secondary'} onClick={() => updateQuantity(productId, productQuantity + 1)}>+</Button>
      </div>
      <Button variant={'error'} onClick={() => removeFromCart(productId)}>
        <TrashIcon className='size-6' />
      </Button>
    </div>
  )
}