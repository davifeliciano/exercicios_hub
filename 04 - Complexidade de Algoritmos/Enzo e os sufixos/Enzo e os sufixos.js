function getCountMap(array) {
  const countMap = new Map();
  
  array.forEach(value => {
    if (!countMap.has(value)) {
      countMap.set(value, 1);
      return;
    }
    
    const currentCount = countMap.get(value);
    countMap.set(value, currentCount + 1);
  })
  
  return countMap;
}


function enzosDistinctsArray(array) {
  const countMap = getCountMap(array);
  const result = [];
  array.forEach(value => {
    result.push(countMap.size);
    const currentCount = countMap.get(value);
    if (currentCount === 1) {
      countMap.delete(value);
      return;
    }
    countMap.set(value, currentCount - 1);
  });
  return result;
}