const subtract = require("../src/calculator/subtract");

test("subtracts 5 - 3 to equal 2", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("subtracts 0 - 0 to equal 0", () => {
  expect(subtract(0, 0)).toBe(0);
});
