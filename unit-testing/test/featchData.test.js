const { fetchData } = require("../src/fetchData");

test("fetches data asynchronously", async () => {
  const data = await fetchData();
  expect(data).toBe("data");
});
