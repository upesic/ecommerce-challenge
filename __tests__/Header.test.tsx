import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import '@testing-library/jest-dom';

jest.mock('next/link', () => {
  return ({ href, children }: any) => <a href={href}>{children}</a>;
});

jest.mock('@/context/CartContext', () => ({
  useCart: () => ({
    getTotalCount: () => 3,
    isLoaded: true,
  }),
}));

describe('Header', () => {
  it('renders Header component', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /impact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /3/i })).toHaveAttribute('href', '/cart');
  });

});