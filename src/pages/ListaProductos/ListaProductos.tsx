import { List as ListMUI, Typography } from "@mui/material";
import { styled } from "styled-components";
import { ListaProductosItem } from "..";

interface ListaProductosInterface {
  items: any[];
}

const ListaProductos: React.FC<ListaProductosInterface> = ({ items }) => {
  return items.length <= 0 ? (
    <Typography> No hay resultados.</Typography>
  ) : (
    <List>
      {items.map(item => {
        return <ListaProductosItem item={item} key={item.id} />;
      })}
    </List>
  );
};

export default ListaProductos;

const List = styled(ListMUI)`
  width: "100%";
  background-color: white;
`;
