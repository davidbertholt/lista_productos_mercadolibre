import { Product } from "@/models";
import { AppStore } from "@/redux/store";
import { List as ListMUI, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { ProductsListItem } from "..";

interface ProductsListInterface {}

const ProductsList: React.FC<ProductsListInterface> = () => {
  const { products } = useSelector((state: AppStore) => state.products);

  return products && products.length <= 0 ? (
    <Typography> No entries.</Typography>
  ) : (
    <List>
      {products.map((product: Product) => {
        return <ProductsListItem item={product} key={product.id} />;
      })}
    </List>
  );
};

export default ProductsList;

const List = styled(ListMUI)`
  width: "100%";
  background-color: white;
`;
