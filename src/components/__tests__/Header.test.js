import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  // const loginButton = screen.getByText("login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a cart item 0", () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - 0 items");

  // const loginButton = screen.getByText("login");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a cart item", () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  // const loginButton = screen.getByText("login");

  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });


  expect(logoutButton).toBeInTheDocument();
});