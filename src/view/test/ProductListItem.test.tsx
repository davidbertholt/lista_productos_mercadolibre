import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { a_product, testProductsState } from "./mocks/initialSateMock";
import createMockStore from "redux-mock-store";
import { ProductsListItem } from "../pages";

describe("ProductsListItem", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be render a product list item", () => {
    given_the_search_is_rendered_with_a_product();
    then_the_product_is_rendered();
  });
});

function given_the_search_is_rendered_with_a_product() {
  const initialState = testProductsState;

  const mockStore = createMockStore();
  const searchBarStore = mockStore(initialState);

  const item = a_product;

  render(
    <Provider store={searchBarStore}>
      <BrowserRouter>
        <ProductsListItem item={item} data-testid="itemList" />
      </BrowserRouter>
    </Provider>
  );
}

function then_the_product_is_rendered() {
  const element = screen.getByText(a_product.title);
  expect(element).toBeTruthy();
}
