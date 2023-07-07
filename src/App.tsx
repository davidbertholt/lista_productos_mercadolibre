import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Path } from "./components";
import API from "./config/constants";
import { LayoutContainer } from "./styled-components";
import { themeOptions } from "./themeConfig";
import { ListaProductos } from "./pages";

const api_base = API;
const request_url = "search?q=Apple%20IPod";

function App() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${api_base}${request_url}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
        console.log(results);
      })
      .catch(console.error);
  }, []);

  return (
    <ThemeProvider theme={themeOptions}>
      <LayoutContainer>
        <Navbar />
        <Path />
        <ListaProductos items={results} />
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
