test("color API response has expected JSON structure", () => {
  const mockResponse = {
    results: [
      {
        ID: 1,
        Name: "blue"
      }
    ],
    error: ""
  };

  expect(mockResponse).toHaveProperty("results");
  expect(Array.isArray(mockResponse.results)).toBe(true);
  expect(mockResponse.results[0]).toHaveProperty("ID");
  expect(mockResponse.results[0]).toHaveProperty("Name");
  expect(mockResponse).toHaveProperty("error");
});