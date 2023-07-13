import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "@/view/routes/Routes";
import { LayoutContainer } from "@/view";

function App() {
  return (
    <LayoutContainer>
      <RouterProvider router={router} />
    </LayoutContainer>
  );
}

export default App;
