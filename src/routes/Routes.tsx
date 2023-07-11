import { Layout } from "@/components";
import { ProductDetails, ProductsList } from "@/pages";
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
