import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { a_product_detail, testProductsState } from "./mocks/initialSateMock";
import createMockStore from "redux-mock-store";
import { ProductDetails } from "../pages";

describe("ProductDetails", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be render a product detail view", () => {
    given_the_search_is_rendered_with_a_product();
    then_render_the_product();
    then_render_the_buy_button();
  });
});

function given_the_search_is_rendered_with_a_product() {
  const initialState = testProductsState;

  const mockStore = createMockStore();
  const searchBarStore = mockStore(initialState);

  render(
    <Provider store={searchBarStore}>
      <BrowserRouter>
        <ProductDetails />
      </BrowserRouter>
    </Provider>
  );
}

function then_render_the_buy_button() {
  const element = screen.getByText("Buy");
  expect(element).toBeTruthy();
}
function then_render_the_product() {
  const description = screen.getByText(a_product_detail.description);
  const price = screen.getByText(/111/i);
  const sold = screen.getByText(/222/i);

  expect(description).toBeTruthy();
  expect(price).toBeTruthy();
  expect(sold).toBeTruthy();
}
