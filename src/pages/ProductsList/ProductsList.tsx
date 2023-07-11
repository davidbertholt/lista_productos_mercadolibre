import { Product } from "@/models";
import { AppStore } from "@/redux/store";
import { List as ListMUI, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { ProductsListItem } from "..";

interface ProductsListInterface {}

const ProductsList: React.FC<ProductsListInterface> = () => {
  const { products, isLoading } = useSelector(
    (state: AppStore) => state.products
  );

  return isLoading ? (
    <Typography> Is loading...</Typography>
  ) : products && products.length <= 0 ? (
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
  min-width: 150vh;
  background-color: white;
`;
