import { sum } from "../sum";

test("Sum of 2 function", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
