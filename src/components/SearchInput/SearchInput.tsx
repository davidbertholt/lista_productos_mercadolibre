import { AppDispatch } from "@/redux/store";
import getProductsByQuery from "@/services/products";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export interface SearchInputInterface {}

const SearchInput: React.FC<SearchInputInterface> = () => {
  const [searchString, setSearchString] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const regex = /\/item\//;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const delayFn = setTimeout(() => {
      dispatch(getProductsByQuery(searchString));

      if (location.pathname.match(regex)) navigate("/list");
    }, 500);

    return () => clearTimeout(delayFn);
  }, [searchString]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchString}
        onChange={e => setSearchString(e.target.value)}
      />
    </Search>
  );
};

export default SearchInput;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%"
  },
  width: "100%"
}));
