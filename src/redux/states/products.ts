import { ApiTypes, Product } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../store";

export type ProductsListStateInterface = {
  products: Product[];
  isLoading: boolean;
};

const initialState: ProductsListStateInterface = {
  products: [],
  isLoading: false
};

export const productsSlice = createSlice({
  name: ApiTypes.PRODUCTS,
  initialState: initialState,
  reducers: {
    startLoadingProducts: (state, _) => {
      state.isLoading = true;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false;
      state.products = action.payload;
    }
  }
});

export const { setProducts, startLoadingProducts } = productsSlice.actions;
export const selectProducts = (state: AppStore) => state.products;
