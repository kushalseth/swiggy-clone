import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import RESTAURANTMENU_MOCK_DATA from "../mocks/RestaurantMenuMock";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { act } from "react-dom/test-utils";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESTAURANTMENU_MOCK_DATA),
  })
);

it("should load RestaurantMenu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const restaurantCategory = screen.getByTestId("outputCategoryName");
  fireEvent.click(restaurantCategory);

  const foodItemsList = screen.getAllByTestId("foodItems");

  expect(foodItemsList.length).toBe(3);

  const addButtons = screen.getAllByTestId("handleAdd");

  fireEvent.click(addButtons[0]);

  const cartsText = screen.getByText("Cart (1 items)");

  expect(cartsText).toBeInTheDocument();

  const foodItemsListAfter = screen.getAllByTestId("foodItems");

  expect(foodItemsListAfter.length).toBe(4);
});
