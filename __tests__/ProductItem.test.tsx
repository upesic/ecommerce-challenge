import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductItem from '@/components/ProductItem';
import { ToastProvider } from '@/context/ToastContext';
import { CartProvider } from '@/context/CartContext';
import '@testing-library/jest-dom';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  image: 'https://example.com/image.jpg',
  priority: false,
};

describe('ProductItem', () => {
  it('renders product data correctly', () => {
    render(
      <CartProvider>
        <ToastProvider>
          <ProductItem {...mockProduct} />
        </ToastProvider>
      </CartProvider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test Product');
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  it('shows toast notification after adding to cart', async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <ToastProvider>
          <ProductItem {...mockProduct} />
        </ToastProvider>
      </CartProvider>
    );

    const addButton = screen.getByRole('button', { name: /add to cart/i });
    await user.click(addButton);

    expect(await screen.findByText(/product is added to cart/i)).toBeInTheDocument();
  });
});