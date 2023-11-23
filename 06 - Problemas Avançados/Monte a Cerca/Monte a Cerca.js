function buildTheFence (availableBoards, fenceLength) {
  const sortedBoards = [...availableBoards].sort((a, b) => b - a);
  
  if (sortedBoards.length >= fenceLength) {
    return sortedBoards[fenceLength - 1];
  }
  
  let height = Math.floor(sortedBoards[0] / fenceLength);
  
  if (height >= sortedBoards[1]) {
    return height;
  }
  
  height = Math.floor(sortedBoards[0] / 2);
  
  while (height > 0) {
    let lengthAchieved = 2;
    
    for (let i = 1; i < sortedBoards.length; i++) {
      lengthAchieved += Math.floor(sortedBoards[i] / height);
    }
    
    if (lengthAchieved >= fenceLength) {
      return height
    }
    
    height--;
  }
  
  return 0;
}