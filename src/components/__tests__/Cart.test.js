import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../store";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should render restaurant Menu Component", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  ));

  const accordionHeader = screen.getByText("Thali (4)");
  fireEvent.click(accordionHeader);

  screen.getAllByTestId("foodItems").length.toBe(4);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  screen.getAllByTestId("foodItems").length.toBe(6);
  // 4 from add button and 2 from cart

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  screen.getAllByTestId("foodItems").length.toBe(4);

  expect(screen.getByText("Cart is empty, Add food to cart!!")).toBeInTheDocument();

});

