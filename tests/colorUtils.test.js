const { formatColorName, isValidColorName } = require("../js/colorUtils");

test("formats color names by trimming and lowercasing", () => {
  expect(formatColorName("  Blue  ")).toBe("blue");
});

test("rejects empty color names", () => {
  expect(isValidColorName("   ")).toBe(false);
});