function getCountMap(str) {
  const countMap = new Map();
  
  str.split("").forEach(char => {
    if (!countMap.has(char)) {
      countMap.set(char, 1);
      return;
    }
    
    const currentCount = countMap.get(char);
    countMap.set(char, currentCount + 1);
  })
  
  return countMap;
}

function checkStringsAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;
  
  const countMap1 = getCountMap(str1);
  const countMap2 = getCountMap(str2);
  
  if (countMap1.size !== countMap2.size) return false;
  for (const [key, count] of countMap1) {
    if (!countMap2.has(key)) return false;
    if (countMap2.get(key) !== count) return false;
  }
  
  return true;
}