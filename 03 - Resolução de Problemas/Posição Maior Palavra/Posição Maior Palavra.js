//Programa ai!
function maiorNoFim(str) {
  const words = str.split(" ");
  let bigWord;
  let bigWordLength = 0;
  
  for (const word of words) {
    const wordLength = word.length;
    if (wordLength > bigWordLength) {
      bigWordLength = wordLength;
      bigWord = word;
    }
  }
  
  const lastWordIndex = words.length - 1;
  const bigWordIndex = words.indexOf(bigWord);
  [words[lastWordIndex], words[bigWordIndex]] =
    [words[bigWordIndex], words[lastWordIndex]];
    
  return words.join(" ");
}