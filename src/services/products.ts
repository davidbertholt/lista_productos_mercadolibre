import { http } from "@/http-common";
import { setProducts, startLoadingProducts } from "@/redux/states/products";
import { RootState } from "@/redux/store";

const getProductsByQuery = (query: string) => {
  return async (dispatch: any, _getState: RootState) => {
    dispatch(startLoadingProducts(true));
    try {
      const res = await http.get(`sites/MLA/search?q=${query}`);
      dispatch(setProducts(res.data.results));
    } catch (error) {
      console.error(error);
      alert(
        "Ocurrió un error, por favor recargue la pantalla y vuelva a intentarlo"
      );
    }
  };
};
export default getProductsByQuery;
