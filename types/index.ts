export interface Params {
  params: {
    categoryName: string;
  };
}

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

export interface CartProductProps {
  item: CartItem
};

export interface CartProductFooterProps {
  productId: number,
  productQuantity: number
}

export interface CategoryItemProps {
  name: string;
}

export interface ProductItemProps {
  id: number;
  image?: string;
  title: string;
  price: number;
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  rating: {
    rate: number;
    count: number;
  };
};

