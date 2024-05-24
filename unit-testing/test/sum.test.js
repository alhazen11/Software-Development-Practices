const sum = require("../src/calculator/sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum -1 + -1 to equal -2", () => {
  expect(sum(-1, -1)).toBe(-2);
});

test("sum 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});
