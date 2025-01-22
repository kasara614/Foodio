import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import { MOCK_DATA } from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  });
});


it("Should Search Res List for 'breakfast' text input", async () => {

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  // console.log(searchBtn);

  const searchInput = screen.getByTestId("searchInput");

  // console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "breakfast" } });

  fireEvent.click(searchBtn);

  //screen should load 1 card with breakfast in his title (morning time only in calling data of real API call of swiggy mock data)

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter top rated restaurant", async () => {

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurant" });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(1);
});