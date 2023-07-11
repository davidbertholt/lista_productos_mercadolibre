import {
  AppBar as AppBarMui,
  Box,
  Button,
  Toolbar as ToolbarMUI,
  styled
} from "@mui/material";

import { SearchInput } from "..";
import { Link } from "react-router-dom";

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Link to={"/list"}>
            <Button>
              <img height={60} width={70} src="/MeLi3.png"></img>
            </Button>
          </Link>
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
