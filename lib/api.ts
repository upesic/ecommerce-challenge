import { Product } from '@/types';

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/categories`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}