const { compileCode } = require("../src/errorThrower");

test("compiling code throws an error", () => {
  expect(() => compileCode()).toThrow("You have an error in your code");
});
