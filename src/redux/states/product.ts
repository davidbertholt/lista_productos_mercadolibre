import { ApiTypes, Category, ProductDetail } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../store";

export type ProductDetailStateInterface = {
  product_detail: ProductDetail;
  isLoading: boolean;
  categoryPath: Category[];
};

const initialState: ProductDetailStateInterface = {
  product_detail: {
    id: "",
    title: "",
    price: 0,
    seller_address: {
      id: "",
      city: {
        id: "",
        name: ""
      },
      country: {
        id: "",
        name: ""
      },
      state: {
        id: "",
        name: ""
      }
    },
    thumbnail: "",
    condition: "",
    sold_quantity: 0,
    description: "",
    pictures: []
  },
  isLoading: false,
  categoryPath: []
};

export const productSlice = createSlice({
  name: ApiTypes.PRODUCT_DETAIL,
  initialState: initialState,
  reducers: {
    startLoadingProductDetail: (state, _) => {
      state.isLoading = true;
    },
    setProductDetail: (state, action) => {
      state.isLoading = false;
      state.product_detail = {
        ...action.payload.item,
        description: action.payload.description.plain_text
      };
    },
    setPathToProduct: (state, action) => {
      state.categoryPath = action.payload;
    }
  }
});

export const {
  setProductDetail,
  startLoadingProductDetail,
  setPathToProduct
} = productSlice.actions;
export const selectProductDetail = (state: AppStore) => state.product;
