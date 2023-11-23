function sortedArrayToBST(
  values,
  left = 0,
  right = values.length - 1,
) {
  if (
    left > right ||
    left < 0 ||
    right >= values.length
  ) return null;
  
  const middle = Math.floor(0.5 * (left + right));
  const value = values[middle];
  
  if (left === right) {
    return {
      value,
      left: null,
      right: null,
    };
  }
  
  return {
    value,
    left: sortedArrayToBST(values, left, middle - 1),
    right: sortedArrayToBST(values, middle + 1, right),
  };
}

