function targetReachable(queenPos, targetPos) {
  const [queenX, queenY] = queenPos;
  const [targetX, targetY] = targetPos;
  
  if (queenX === targetX || queenY === targetY) {
    return true;
  }
  
  const relativeX = Math.abs(targetX - queenX);
  const relativeY = Math.abs(targetY - queenY);
  
  if (relativeX === relativeY) {
    return true;
  }
  
  return false;
}

function numMov(queenPos, targetPos){
  if (queenPos.every((value, index) => value === targetPos[index])) {
    return 0;
  }
  if (targetReachable(queenPos, targetPos)) {
    return 1;
  }
  return 2;
}