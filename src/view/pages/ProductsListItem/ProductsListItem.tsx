import { Product } from "@/domain/models";
import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText as ListItemTextMUI
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface ProductListItemInterface {
  item: Product;
}

const ProductListsItem: React.FC<ProductListItemInterface> = ({ item }) => {
  const labelId = `list-label-${item.id}`;
  return (
    <Link data-testid={labelId} to={`/item/${item.id}`}>
      <ListItemContainer>
        <ListItem disablePadding>
          <ListItemButton divider>
            <ListItemAvatar>
              <img
                alt={`${item.title}`}
                src={`${item.thumbnail}`}
                width={150}
                height={150}
              />
            </ListItemAvatar>

            <ListItemText
              id={labelId}
              primary={`$${item.price}`}
              secondary={`${item.title}`}
            />
            <SellerAddress>{item.seller_address.city.name}</SellerAddress>
          </ListItemButton>
        </ListItem>
      </ListItemContainer>
    </Link>
  );
};

export default ProductListsItem;

const ListItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const SellerAddress = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListItemText = styled(ListItemTextMUI)`
  padding: 10px;
`;
