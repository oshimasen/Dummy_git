import { sum } from "../src/sum.js";

test("adds numbers correctly", () => {
  expect(sum(1, 2)).toBe(3);
});

// New failing test
test("this test should fail for demo", () => {
  expect(sum(2, 2)).toBe(5); // wrong on purpose
});
