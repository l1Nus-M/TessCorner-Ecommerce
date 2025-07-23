export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'clothing' | 'shoes' | 'skincare' | 'makeup' | 'accessories';
  image: string;
  images: string[];
  description: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}