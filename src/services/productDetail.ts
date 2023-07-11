import { http } from "@/http-common";
import { setProductDetail, startLoadingProductDetail } from "@/redux";
import { RootState } from "@/redux/store";

const getProductById = (id: string) => {
  return async (dispatch: any, _getState: RootState) => {
    dispatch(startLoadingProductDetail(true));
    try {
      const item = await http.get(`items/${id}`);
      const description = await http.get(`items/${id}/description`);
      dispatch(
        setProductDetail({ item: item.data, description: description.data })
      );
    } catch (error) {
      console.error(error);
      alert(
        "Ocurrió un error, por favor recargue la pantalla y vuelva a intentarlo"
      );
    }
  };
};
export default getProductById;
