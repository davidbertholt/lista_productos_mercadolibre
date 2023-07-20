import { http } from ".";

const productPath = async (id: string) => {
  return await http.get(`categories/${id}`);
};
export default productPath;
