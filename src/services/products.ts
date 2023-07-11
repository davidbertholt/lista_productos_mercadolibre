import { http } from "@/http-common";
import { setProducts, startLoadingProducts } from "@/redux/states/products";
import { RootState } from "@/redux/store";

const getProductsByQuery = (query: string) => {
  return async (dispatch: any, _getState: RootState) => {
    dispatch(startLoadingProducts(true));
    try {
      const res = await http.get(`search?q=${query}`);
      dispatch(setProducts(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };
};
export default getProductsByQuery;
