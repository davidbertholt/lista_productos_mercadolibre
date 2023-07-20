import { ApiTypes, Category, ProductDetail } from "@/domain/models";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../store";
import {
  productDescription,
  productDetail,
  productPath
} from "@/infrastructure/services";

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

export const fetchProduct = createAsyncThunk(
  "fetchProduct/fetch",
  async (key: string, _thunkAPI) => {
    const item = await productDetail(key);
    const description = await productDescription(key);
    const categories = await productPath(item.data.category_id);
    const data = {
      item: item.data,
      description: description.data,
      path: categories.data.path_from_root
    };
    return data;
  }
);

export const fetchPathProduct = createAsyncThunk(
  "fetchPathProduct/fetch",
  async (key: string, _thunkAPI) => {
    const item = await productPath(key);

    const data = item.data;
    return data;
  }
);

export const productSlice = createSlice({
  name: ApiTypes.PRODUCT_DETAIL,
  initialState: initialState,
  reducers: {
    startLoadingProductDetail: (state, actions) => {
      state.isLoading = actions.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product_detail = {
        ...action.payload.item,
        description: action.payload.description.plain_text
      };

      state.categoryPath = action.payload.path;

      state.isLoading = false;
    });

    builder.addCase(fetchPathProduct.fulfilled, (state, action) => {
      state.categoryPath = action.payload;
    });
  }
});

export const { startLoadingProductDetail } = productSlice.actions;
export const selectProductDetail = (state: AppStore) => state.product;
