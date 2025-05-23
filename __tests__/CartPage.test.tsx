import { render, screen } from '@testing-library/react';
import CartPage from '@/app/cart/page';
import { ToastProvider } from '@/context/ToastContext';
import '@testing-library/jest-dom';
import { useCart } from '@/context/CartContext';

jest.mock('@/components/CartProduct', () => ({ item }: any) => (
  <div data-testid="mock-cart-product">{item.title}</div>
));

jest.mock('@/context/CartContext', () => ({
  useCart: jest.fn(),
}));

const renderWithProviders = (component: React.ReactNode) => {
  return render(<ToastProvider>{component}</ToastProvider>);
};

describe('CartPage', () => {
  it('shows spinner when not loaded', async () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [],
      isLoaded: false,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn(),
      getTotalCount: jest.fn(() => 0),
    });

    renderWithProviders(<CartPage />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('shows empty message when cart is empty', () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [],
      isLoaded: true,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn(),
      getTotalCount: jest.fn(() => 0),
    });

    renderWithProviders(<CartPage />);
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it('renders cart products and total price', () => {
    (useCart as jest.Mock).mockReturnValue({
      items: [
        { id: 1, title: 'Item A', price: 50, quantity: 2 },
        { id: 2, title: 'Item B', price: 25, quantity: 1 },
      ],
      isLoaded: true,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn(),
      getTotalCount: jest.fn(() => 3),
    });

    renderWithProviders(<CartPage />);
    expect(screen.getAllByTestId('mock-cart-product')).toHaveLength(2);
    expect(screen.getByText(/total: \$125.00/i)).toBeInTheDocument();
  });
});