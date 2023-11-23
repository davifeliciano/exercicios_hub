function maisFrequente(scores) {
  
  const scoreCount = new Map();
  
  scores.forEach((score) => {
    const currentCount = scoreCount.get(score);
    if (currentCount === undefined) {
      scoreCount.set(score, 1);
      return;
    }
    scoreCount.set(score, currentCount + 1);
  });
  
  let [mostFrequentScore, mostFrequentScoreCount] = 
    scoreCount.entries().next().value;
    
  scoreCount.forEach((scoreCount, score) => {
    if (
      scoreCount > mostFrequentScoreCount ||
      (scoreCount === mostFrequentScoreCount && score > mostFrequentScore)
    ) {
      mostFrequentScore = score;
      mostFrequentScoreCount = scoreCount;
    }
  });
  
  return mostFrequentScore;
}