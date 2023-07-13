import {
  setPathToProduct,
  setProductDetail,
  startLoadingProductDetail
} from "@/infrastructure/redux";
import { RootState } from "@/infrastructure/redux/store";
import { http } from ".";

const getProductById = (id: string) => {
  return async (dispatch: any, _getState: RootState) => {
    dispatch(startLoadingProductDetail(true));
    try {
      const item = await http.get(`items/${id}`);
      const description = await http.get(`items/${id}/description`);
      const categories = await http.get(`categories/${item.data.category_id}`);
      dispatch(
        setProductDetail({ item: item.data, description: description.data })
      );
      dispatch(setPathToProduct(categories.data.path_from_root));
    } catch (error) {
      console.error(error);
      alert(
        "Ocurrió un error, por favor recargue la pantalla y vuelva a intentarlo"
      );
    }
  };
};
export default getProductById;
