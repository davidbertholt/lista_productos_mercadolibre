import { ApiTypes, Product } from "@/domain/models";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../store";
import { productsList } from "@/infrastructure/services";

export type ProductsListStateInterface = {
  products: Product[];
  isLoading: boolean;
};

const initialState: ProductsListStateInterface = {
  products: [],
  isLoading: false
};

export const fetchProducts = createAsyncThunk(
  "fetchProducts/fetch",
  async (query: string, _thunkAPI) => {
    const res = await productsList(query);
    const data = res.data.results;
    return data;
  }
);

export const productsSlice = createSlice({
  name: ApiTypes.PRODUCTS,
  initialState: initialState,
  reducers: {
    startLoadingProducts: (state, actions) => {
      state.isLoading = actions.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.isLoading = false;
      }
    );
  }
});

export const { startLoadingProducts } = productsSlice.actions;
export const selectProducts = (state: AppStore) => state.products;
