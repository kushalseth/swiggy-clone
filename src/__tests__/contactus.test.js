import ContactUs from "../components/ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("these are Contact Us test cases", () => {
  it("should load contactUs component", () => {
    render(<ContactUs />);

    const headings = screen.getByRole("heading");

    expect(headings).toBeInTheDocument();
  });

  test("should load button inside contact us", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load 2 input boxes", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");

    console.log("kushal ", inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
  });
});
