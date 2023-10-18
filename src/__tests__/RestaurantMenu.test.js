import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import RESTAURANTMENU_MOCK_DATA from "../mocks/RestaurantMenuMock";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANTMENU_MOCK_DATA);
    },
  });
});

it("should load RestaurantMenu component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    );
  });

  const restaurantCategory = screen.getByText("Samosas. (3)");

  console.log(restaurantCategory);

  restaurantCategory.click();
});
