import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CategoryPage from '@/app/category/[categoryName]/page';
import { fetchProductsByCategory } from '@/lib/api';

const mockProducts = [
  { id: 1, title: 'Product One', price: 10, image: 'image1.jpg', description: '', category: 'electronics', rating: { rate: 4, count: 20 } },
  { id: 2, title: 'Product Two', price: 20, image: 'image2.jpg', description: '', category: 'electronics', rating: { rate: 4.5, count: 10 } },
];

jest.mock('@/lib/api');
jest.mock('@/components/ProductItem', () => () => <div data-testid="mock-product">Product Item</div>);

describe('CategoryPage', () => {
  it('renders category page with products', async () => {
    (fetchProductsByCategory as jest.Mock).mockResolvedValueOnce(mockProducts);

    const jsx = await CategoryPage({ params: { categoryName: 'electronics' } });
    render(jsx);

    expect(screen.getByRole('link', { name: /back to main page/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /electronics/i })).toBeInTheDocument();
    expect(screen.getByText(/2 products/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('mock-product')).toHaveLength(2);
  });

  it('renders fallback when no products are returned', async () => {
    (fetchProductsByCategory as jest.Mock).mockResolvedValueOnce([]);

    const jsx = await CategoryPage({ params: { categoryName: 'test-category' } });
    render(jsx);

    expect(screen.getByText(/There are no products for selected category/i)).toBeInTheDocument();
  });
});