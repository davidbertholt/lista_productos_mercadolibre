import { http } from ".";

const getProducts = async (query: string) => {
  return await http.get(`sites/MLA/search?q=${query}`);
};
export default getProducts;
