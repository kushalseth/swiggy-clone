import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import RESCARD_MOCK_DATA from "../mocks/RestaurantCardMock";

describe("Restaurant Card test cases", () => {
  it("should load RestaurantCard component with Data", () => {
    render(<RestaurantCard resData={RESCARD_MOCK_DATA} />);

    const name = screen.getByText("Subway");

    expect(name).toBeInTheDocument();
  });

  it("should load RestaurantCard with Promoted Label", () => {
    const PromotedRestaurant = withPromotedLabel(RestaurantCard);

    render(<PromotedRestaurant resData={RESCARD_MOCK_DATA} />);

    const name = screen.getByText("Promoted");

    expect(name).toBeInTheDocument();
  });
});
