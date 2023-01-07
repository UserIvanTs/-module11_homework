const match = require("./index");
test("hEllO=HELLo", () => {
  expect(match("hEllO", "hellO")).toBe(true);
});
test("Hel1o != hello", () => {
  expect(match("Hel1o", "hello")).toBe(false);
});
test("HELLO != 1234", () => {
  expect(match("HELLO", "1234")).toBe(false);
});
