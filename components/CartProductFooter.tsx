import { useCart } from '@/context/CartContext';
import { CartProductFooterProps } from '@/types';
import { TrashIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import { useToast } from '@/context/ToastContext';

export default function CartProductFooter({ productId, productQuantity }: CartProductFooterProps) {
  const { removeFromCart, updateQuantity } = useCart();
  const { showToast } = useToast();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-2">
        <Button variant={'secondary'} disabled={productQuantity === 1} onClick={() => updateQuantity(productId, productQuantity - 1)}>-</Button>
        <span className="w-6 text-center">{productQuantity}</span>
        <Button variant={'secondary'} onClick={() => updateQuantity(productId, productQuantity + 1)}>+</Button>
      </div>
      <Button variant={'error'} onClick={() => {
        removeFromCart(productId);
        showToast('Product is removed from cart');
      }}>
        <TrashIcon className='size-6' />
      </Button>
    </div>
  )
}