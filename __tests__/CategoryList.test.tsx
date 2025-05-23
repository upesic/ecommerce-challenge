import { fetchCategories } from '@/lib/api';

describe('fetchCategories', () => {
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
});