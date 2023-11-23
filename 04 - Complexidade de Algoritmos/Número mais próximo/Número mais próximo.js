function closestNumber(array, target){
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

  if (right === -1) right++;
  if (left === array.length) left--;
  
  const lowerBound = array[right];
  const upperBound = array[left];
  const lowerBoundDistance = target - lowerBound;
  const upperBoundDistance = upperBound - target;
  
  if (lowerBoundDistance < upperBoundDistance) {
    return array[right];
  } else {
    return array[left];
  }
}