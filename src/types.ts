export type Role = 'customer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  photo?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface Product {
  id: string;
  category_id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  price: number;
  discount: number;
  sales: number;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
