import userEvent from '@testing-library/user-event';
import CartProductFooter from '@/components/CartProductFooter';
import { ToastProvider } from '@/context/ToastContext';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock funkcije
const mockRemove = jest.fn();
const mockUpdate = jest.fn();

jest.mock('@/context/CartContext', () => ({
  useCart: () => ({
    removeFromCart: mockRemove,
    updateQuantity: mockUpdate,
    addToCart: jest.fn(),
    getTotalCount: jest.fn(() => 0),
    items: [],
    isLoaded: true,
  }),
}));

describe('CartProductFooter', () => {
  it('calls updateQuantity when + and - buttons are clicked', async () => {
    const user = userEvent.setup();

    render(
      <ToastProvider>
        <CartProductFooter productId={1} productQuantity={2} />
      </ToastProvider>
    );

    const minusButton = screen.getByRole('button', { name: '-' });
    const plusButton = screen.getByRole('button', { name: '+' });

    await user.click(minusButton);
    expect(mockUpdate).toHaveBeenCalledWith(1, 1);

    await user.click(plusButton);
    expect(mockUpdate).toHaveBeenCalledWith(1, 3);
  });


  it('removes product and shows toast when delete button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <ToastProvider>
        <CartProductFooter productId={3} productQuantity={1} />
      </ToastProvider>
    );

    const deleteButton = screen.getByRole('button', { name: '' });
    await user.click(deleteButton);

    expect(mockRemove).toHaveBeenCalledWith(3);
    expect(await screen.findByText(/product is removed from cart/i)).toBeInTheDocument();
  });
});