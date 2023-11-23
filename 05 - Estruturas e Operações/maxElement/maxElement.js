function maxElement(array, index = 0) {
  if (
    array.length === 0 ||
    index >= array.length ||
    index < 0
  ) return;
  
  const value = array[index];
  const sliceMax = maxElement(array, index + 1);
  
  if (sliceMax === undefined || value >= sliceMax) {
    return value;
  }
  
  return sliceMax;
}