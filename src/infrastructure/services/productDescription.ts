import { http } from ".";

const productDescription = async (id: string) => {
  return await http.get(`items/${id}/description`);
};
export default productDescription;
