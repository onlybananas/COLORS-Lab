function formatColorName(color) {
  return color.trim().toLowerCase();
}

function isValidColorName(color) {
  return typeof color === "string" && color.trim().length > 0;
}

module.exports = {
  formatColorName,
  isValidColorName
};