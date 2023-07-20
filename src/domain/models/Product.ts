import { Address } from ".";

export type Product = {
  id: string;
  thumbnail: string;
  title: string;
  seller_address: Address;
  price: number;
};

export type ProductDetail = {
  sold_quantity: number;
  condition: string;
  description: string;
  pictures: Picture[];
} & Product;

export type Picture = {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
};

export type Category = {
  id: string;
  name: string;
};
