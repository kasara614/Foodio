import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {

  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Harishankar Veg Restro");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted label", () => {

  //test Higher Order Component : withPromotedLabel()
  render(withPromotedLabel(RestaurantCard)({ resData: MOCK_DATA }));

  expect(screen.getByText("Promoted Veg")).toBeInTheDocument();

});