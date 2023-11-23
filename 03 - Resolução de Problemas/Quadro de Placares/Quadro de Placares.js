function subindoNoQuadroDeLideres(leaderScores, playerScores) {
  const playerPositions = [];
  
  for (const playerScore of playerScores) {
    let index = 0;
    let playerPosition = 1;
    let currentLeaderScore = leaderScores[0];
    
    while (currentLeaderScore > playerScore && index < leaderScores.length) {
      playerPosition++;
      while (
        leaderScores[index] === currentLeaderScore &&
        index < leaderScores.length
      ) index++;
      currentLeaderScore = leaderScores[index];
    }
    
    playerPositions.push(playerPosition);
  }
  
  return playerPositions;
}

function aceitoDesafio() {
    return true;
}