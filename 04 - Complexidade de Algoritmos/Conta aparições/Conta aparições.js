function countWord(array, target){
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
  
  const upperBoundIndex = right;
  if (array[upperBoundIndex] !== target) return 0;
  
  left = 0;
  right = array.length - 1;
  
  while (left <= right) {
    const middleIndex = Math.floor(0.5 * (left + right));
    
    if (array[middleIndex] < target) {
      left = middleIndex + 1;
    }

    if (array[middleIndex] >= target) {
      right = middleIndex - 1;
    }
  }
  
  const lowerBoundIndex = right;
  return upperBoundIndex - lowerBoundIndex;
}