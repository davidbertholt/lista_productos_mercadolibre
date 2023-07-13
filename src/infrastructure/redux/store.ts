import { configureStore } from "@reduxjs/toolkit";

// reducers
import { useDispatch } from "react-redux";
import { ProductDetailStateInterface, productSlice } from "./states";
import { ProductsListStateInterface, productsSlice } from "./states/products";

export interface AppStore {
  products: ProductsListStateInterface;
  product: ProductDetailStateInterface;
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
