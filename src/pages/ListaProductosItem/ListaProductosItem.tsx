import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from "@mui/material";
import { styled } from "styled-components";

interface ListaProductosItemInterface {
  item: any;
}

const ListaProductosItem: React.FC<ListaProductosItemInterface> = ({
  item
}) => {
  const labelId = `list-label-${item.id}`;
  return (
    <ListItemContainer>
      <ListItem disablePadding>
        <ListItemButton divider>
          <ListItemAvatar>
            <img alt={`${item.title}`} src={`${item.thumbnail}`} />
          </ListItemAvatar>
          <ListItemText id={labelId} primary={`${item.title}`} />
          <LugarDeVenta>{item.seller_address.city.name}</LugarDeVenta>
        </ListItemButton>
      </ListItem>
    </ListItemContainer>
  );
};

export default ListaProductosItem;

const ListItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const LugarDeVenta = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
