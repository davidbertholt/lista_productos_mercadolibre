import { ApiTypes, Product } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

export const productSlice = createSlice({
  name: ApiTypes.PRODUCT,
  initialState: getLocalStorage(ApiTypes.PRODUCT)
    ? JSON.parse(getLocalStorage(ApiTypes.PRODUCT) as string)
    : initialState,
  reducers: {
    getProduct: (state, action) => {
      setLocalStorage(ApiTypes.PRODUCT, state);
      return action.payload;
    }
  }
});

export const { getProduct } = productSlice.actions;
