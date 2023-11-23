function findFirstIndex(array, target){
  if (array.length === 0) return -1;
  
  let left = 0;
  let right = array.length - 1;
  
  while (left <= right) {
    let middleIndex = Math.floor(0.5 * (left + right));
    
    while (array[middleIndex] === target) {
      if (middleIndex === 0 || array[middleIndex - 1] !== target) {
        return middleIndex;
      }
      middleIndex--;
    }
    
    if (array[middleIndex] > target) {
      right = middleIndex - 1;
    }
    
    if (array[middleIndex] < target) {
      left = middleIndex + 1;
    }
  }
  
  return -1;
}