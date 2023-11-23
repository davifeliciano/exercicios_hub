function binarySearch(array, target, left = 0, right = array.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor(0.5 * (right + left));
  const value = array[mid];
  
  if (value === target) return mid;
  if (value > target) return binarySearch(array, target, left, mid - 1);
  if (value < target) return binarySearch(array, target, mid + 1, right);
}