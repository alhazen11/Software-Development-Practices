const { forEach } = require("../src/forEach");

test("mock function is called correct number of times", () => {
  const mockCallback = jest.fn();
  forEach([0, 1, 2], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(3);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.calls[2][0]).toBe(2);
});
