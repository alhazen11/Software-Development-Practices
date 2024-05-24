const { createUser } = require("../src/user");

test("creates a user object correctly", () => {
  const user = createUser("John Doe", 30);

  expect(user).toEqual({ name: "John Doe", age: 30, active: true });
  expect(user.name).toBe("John Doe");
  expect(user.age).toBeGreaterThanOrEqual(18);
  expect(user.active).toBeTruthy();
});
