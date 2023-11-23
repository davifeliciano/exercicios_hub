function organizar (prices) {
  const sortedPrices = [...prices].sort((a, b) => a - b);
  const result = [];
  while (sortedPrices.length > 0) {
    result.push([
      sortedPrices.shift(),
      sortedPrices.shift(),
      sortedPrices.pop()
    ].filter((value) => value !== undefined));
  }
  return result;
}