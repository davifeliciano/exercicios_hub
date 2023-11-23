function findIndexInverted(wordList, word){
  let left = 0;
  let right = wordList.length - 1;
  
  while (left <= right) {
    const middleIndex = Math.floor(0.5 * (left + right));
    const middleWord = wordList[middleIndex]
    if (middleWord === word) return middleIndex;
    // Logical inequality operators are inverted here because the
    // wordList is sorted in the reversed order
    if (middleWord < word) right = middleIndex - 1;
    if (middleWord > word) left = middleIndex + 1;
  }
  
  return -1;
}