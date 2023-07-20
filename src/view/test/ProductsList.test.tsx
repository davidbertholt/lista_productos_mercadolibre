import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  a_product,
  testEmptyProductsState,
  testProductsState
} from "./mocks/initialSateMock";
import createMockStore from "redux-mock-store";
import { ProductsList } from "../pages";

describe("ProductsList", () => {
  afterEach(() => {
    cleanup();
  });
  it("when render component without product render no entries ", () => {
    given_the_search_is_rendered_without_products();
    then_no_entries_is_rendered();
  });
  it("when render component with products render the list ", () => {
    given_the_search_is_rendered_with_products();
    then_the_product_is_rendered();
  });
});

function given_the_search_is_rendered_without_products() {
  const initialState = testEmptyProductsState;

  const mockStore = createMockStore();
  const searchBarStore = mockStore(initialState);

  render(
    <Provider store={searchBarStore}>
      <BrowserRouter>
        <ProductsList />
      </BrowserRouter>
    </Provider>
  );
}
function given_the_search_is_rendered_with_products() {
  const initialState = testProductsState;

  const mockStore = createMockStore();
  const searchBarStore = mockStore(initialState);

  render(
    <Provider store={searchBarStore}>
      <BrowserRouter>
        <ProductsList />
      </BrowserRouter>
    </Provider>
  );
}

function then_no_entries_is_rendered() {
  const element = screen.getByText("No entries.");
  expect(element).not.toBeFalsy();
}

function then_the_product_is_rendered() {
  const element = screen.getByText(a_product.title);
  expect(element).not.toBeFalsy();
}
