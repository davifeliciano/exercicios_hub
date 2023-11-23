function modaTetragrama(str) {
  if (str.length < 4) return "";
  
  const countMap = new Map();
  
  for (let i = 0; i <= str.length - 4; i++) {
    const currentSubstr = str.slice(i, i + 4);
    
    if (!countMap.has(currentSubstr)) {
      countMap.set(currentSubstr, 1);
    }
    
    const currentCount = countMap.get(currentSubstr);
    countMap.set(currentSubstr, currentCount + 1);
  }
  
  const countMapEntries = countMap.entries();
  let [mostOftenSubstr, mostOftenSubstrCount] = countMapEntries.next().value;
  
  for (const [substr, substrCount] of countMapEntries) {
    if (substrCount >= mostOftenSubstrCount) {
      mostOftenSubstr = substr;
      mostOftenSubstrCount = substrCount;
    }
  }
  
  return mostOftenSubstr;
}