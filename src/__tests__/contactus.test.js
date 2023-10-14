import ContactUs from "../components/ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contactUs component", () => {
  render(<ContactUs />);

  const headings = screen.getByRole("heading");

  expect(headings).toBeInTheDocument();
});
