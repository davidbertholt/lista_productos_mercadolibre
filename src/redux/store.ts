import { Product } from "@/models";
import { configureStore } from "@reduxjs/toolkit";

// reducers
import { productSlice } from "./states";
import { ProductsListStateInterface, productsSlice } from "./states/products";
import { useDispatch } from "react-redux";

export interface AppStore {
  products: ProductsListStateInterface;
  product: Product;
}

const store = configureStore<AppStore>({
  reducer: {
    products: productsSlice.reducer,
    product: productSlice.reducer
  }
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
