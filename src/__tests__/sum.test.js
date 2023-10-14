import { sum } from "../components/sum";

test("function should calculate sum of 2 numbers", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
