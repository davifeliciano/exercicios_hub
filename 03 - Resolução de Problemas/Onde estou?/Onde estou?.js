function ondeEstou(caixas) {
  let sequenceLength = 1;
  
  while (sequenceLength < caixas.length) {
    let foundOccurrence = false;
    
    for (let i = 0; i < caixas.length - sequenceLength; i++) {
      let currentSequence = "";
      for (let j = i; j < i + sequenceLength; j++) {
        currentSequence += caixas[j];
      }
      
      for (let j = i + 1; j <= caixas.length - sequenceLength; j++) {
        if (caixas.slice(j, j + sequenceLength) === currentSequence) {
          foundOccurrence = true;
          break;
        }
      }
    }
    
    if (!foundOccurrence) return sequenceLength;
    sequenceLength++;
  }
  
  return sequenceLength;
}