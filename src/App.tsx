import "./App.css";
import { Navbar, Path } from "./components";
import { ProductsList } from "./pages";
import { LayoutContainer } from "./styledComponents";

function App() {
  return (
    <LayoutContainer>
      <Navbar />
      <Path />
      <ProductsList />
    </LayoutContainer>
  );
}

export default App;
