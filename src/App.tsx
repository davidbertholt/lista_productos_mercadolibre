import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes";
import { LayoutContainer } from "./styledComponents";

function App() {
  return (
    <LayoutContainer>
      <RouterProvider router={router} />
    </LayoutContainer>
  );
}

export default App;
