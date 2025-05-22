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
  priority: boolean;
}

export interface ProductItemProps {
  id: number;
  image?: string;
  title: string;
  price: number;
  priority: boolean;
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

export interface ItemImageContainerProps {
  image?: string;
  title: string;
  imageClassName?: string;
  containerClassname?: string;
  priority?: boolean;
}