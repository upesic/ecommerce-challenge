'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalCount: () => number;
  isLoaded: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cart');
      const parsed = stored ? JSON.parse(stored) : [];
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      console.error('Failed to parse cart from localStorage:', e);
      setItems([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    const syncCart = (e: StorageEvent) => {
      if (e.key === 'cart') {
        const updated = e.newValue ? JSON.parse(e.newValue) : [];
        setItems(updated);
      }
    };

    window.addEventListener('storage', syncCart);
    return () => window.removeEventListener('storage', syncCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const getTotalCount = () =>
    items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, getTotalCount, isLoaded }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};