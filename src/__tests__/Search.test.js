import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import GET_RESTAURANTS_MOCK_DATA from "../mocks/SearchMock";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

beforeAll(() => {
 
});

beforeEach(() => {
});

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(GET_RESTAURANTS_MOCK_DATA);
    },
  });
});
it("should search resData for Sub", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCards2 = screen.getAllByTestId("resCardData");

  expect(resCards2.length).toBe(9);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Sub" } });

  fireEvent.click(searchButton);

  const resCards = screen.getAllByTestId("resCardData");

  expect(resCards.length).toBe(2);
});

it("should filter Top Rated Restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCardData");

  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedRestaurants = screen.getByTestId("topRatedRestaurants");

  fireEvent.click(topRatedRestaurants);

  const cardsAfterFilter = screen.getAllByTestId("resCardData");

  expect(cardsAfterFilter.length).toBe(2);
});
