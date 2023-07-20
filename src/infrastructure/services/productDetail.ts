import { http } from ".";

const productDetail = async (id: string) => {
  return await http.get(`items/${id}`);
};
export default productDetail;
