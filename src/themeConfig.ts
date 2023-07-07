import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#001ce2"
    },
    secondary: {
      main: "#fff15a"
    },
    error: {
      main: "#d50000"
    },
    info: {
      main: "#b9b4b5"
    },
    success: {
      main: "#388e3c"
    },
    text: {
      primary: "rgba(12,12,12,0.87)"
    }
  }
});
