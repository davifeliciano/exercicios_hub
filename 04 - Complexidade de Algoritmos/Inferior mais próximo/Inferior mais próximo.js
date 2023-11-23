function lowerbound(array, target){
  if (array.length === 0) return -1;
  
  let left = 0;
  let right = array.length - 1;
  
  while (left <= right) {
    const middleIndex = Math.floor(0.5 * (left + right));
    
    if (array[middleIndex] <= target) {
      left = middleIndex + 1;
    }

    if (array[middleIndex] > target) {
      right = middleIndex - 1;
    }
  }
  
  const result = array[left - 1];
  if (result <= target) return result;
  return -1;
}