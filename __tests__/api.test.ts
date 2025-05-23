import { fetchCategories, fetchProductsByCategory } from '@/lib/api';

const mockProducts = [
  {
    id: 1,
    title: 'Test Product 1',
    price: 29.99,
    description: 'A test product',
    category: 'electronics',
    image: 'test.jpg',
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 2,
    title: 'Test Product 2',
    price: 49.99,
    description: 'Another test product',
    category: 'electronics',
    image: 'test2.jpg',
    rating: { rate: 4.8, count: 89 },
  },
];

describe('test for api calls', () => {
  it('returns category list', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ['electronics', 'jewelery'],
    }) as jest.Mock;

    const result = await fetchCategories();
    expect(result).toEqual(['electronics', 'jewelery']);
  });

  it('throws error if fetch fails', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({ ok: false }) as jest.Mock;
    await expect(fetchCategories()).rejects.toThrow('Failed to fetch categories');
  });

  it('returns product list for given category', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    }) as jest.Mock;

    const result = await fetchProductsByCategory('electronics');
    expect(result).toEqual(mockProducts);
    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/products/category/electronics`,
      { cache: 'no-store' }
    );
  });

  it('throws error if fetch fails', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({ ok: false }) as jest.Mock;
    await expect(fetchProductsByCategory('electronics')).rejects.toThrow('Failed to fetch products');
  });

});