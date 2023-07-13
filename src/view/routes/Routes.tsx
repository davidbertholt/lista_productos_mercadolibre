import { Layout } from "@/view/components";
import { ProductDetails, ProductsList } from "@/view/pages";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        path="/"
        element={
          <Layout>
            <ProductsList />
          </Layout>
        }
      />
      <Route
        path={"/list"}
        element={
          <Layout>
            <ProductsList />
          </Layout>
        }
      />
      <Route
        path="/item/:id"
        element={
          <Layout>
            <ProductDetails />
          </Layout>
        }
      />
    </>
  )
);

export default router;
