import {
  Address,
  Category,
  City,
  Country,
  Product,
  ProductDetail,
  State
} from "@/domain";
import {
  ProductDetailStateInterface,
  ProductsListStateInterface
} from "@/infrastructure/redux";
import { AppStore } from "@/infrastructure/redux/store";

const a_category: Category = {
  id: "a_category_id",
  name: "a_category_name"
};

const a_country: Country = { id: "1", name: "a_country_name" };
const a_state: State = { id: "1", name: "a_state_name" };
const a_city: City = { id: "1", name: "a_city_name" };
const a_seller_address: Address = {
  id: "a_city_id",
  city: a_city,
  country: a_country,
  state: a_state
};

export const a_product: Product = {
  id: "an_id",
  price: 1,
  seller_address: a_seller_address,
  thumbnail: "",
  title: "a_title"
};
export const a_product_detail: ProductDetail = {
  condition: "new",
  description: "a_description",
  id: "an_id",
  pictures: [],
  price: 111,
  seller_address: a_seller_address,
  sold_quantity: 222,
  thumbnail: "",
  title: "a_title"
};

const productDetailReducerMock: ProductDetailStateInterface = {
  categoryPath: [a_category],
  isLoading: false,
  product_detail: a_product_detail
};

export const productsEmptyListReducerMock: ProductsListStateInterface = {
  isLoading: false,
  products: []
};

export const productListReducerMock: ProductsListStateInterface = {
  isLoading: false,
  products: [a_product]
};

export const testEmptyProductsState: AppStore = {
  product: productDetailReducerMock,
  products: productsEmptyListReducerMock
};
export const testProductsState: AppStore = {
  product: productDetailReducerMock,
  products: productListReducerMock
};

export const testUseAppSelector = (f: any) => f(testEmptyProductsState);
