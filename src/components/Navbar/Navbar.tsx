import {
  AppBar as AppBarMui,
  Toolbar as ToolbarMUI,
  styled
} from "@mui/material";
import Box from "@mui/material/Box";
import { SearchInput } from "..";

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const AppBar = styled(AppBarMui)`
  display: flex;
  align-items: center;
`;

const Toolbar = styled(ToolbarMUI)`
  width: 70%;
`;

export default NavBar;
