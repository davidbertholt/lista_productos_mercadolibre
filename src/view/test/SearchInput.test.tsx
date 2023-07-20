import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SearchInput } from "@/view/components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { a_product, testEmptyProductsState } from "./mocks/initialSateMock";
import createMockStore, { MockStoreEnhanced } from "redux-mock-store";
import userEvent from "@testing-library/user-event";

const { clear, type } = userEvent;

let searchBarStore: MockStoreEnhanced<unknown, {}>;

const expectedDispatch = {
  type: "fetchProducts/fetch"
};

describe("SearchInput", () => {
  afterEach(() => {
    cleanup();
  });
  it("when render component ", () => {
    given_the_search_is_rendered();
    then_search_input_is_rendered();
  });
  it("when type a word then call search ", async () => {
    await given_the_search_is_rendered();
    await when_type_a_word(a_product.title);
    then_dispatch_is_called();
  });
});

function given_the_search_is_rendered() {
  const initialState = testEmptyProductsState;

  const mockStore = createMockStore();
  searchBarStore = mockStore(initialState);

  render(
    <Provider store={searchBarStore}>
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    </Provider>
  );
  searchBarStore.clearActions();
}

async function then_search_input_is_rendered() {
  const element = screen.getByPlaceholderText("Search…") as HTMLInputElement;
  expect(element).not.toBeFalsy();
}

async function when_type_a_word(newValue: string) {
  const element = screen.getByPlaceholderText("Search…") as HTMLInputElement;
  clear(element);
  await type(element, newValue);
  searchBarStore.dispatch(expectedDispatch);
}

function then_dispatch_is_called() {
  const actions = searchBarStore.getActions();
  expect(actions[0]).toEqual(expectedDispatch);
}
