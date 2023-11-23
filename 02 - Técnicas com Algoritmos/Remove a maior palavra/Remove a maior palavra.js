//Programa ai!
function biggestWordLen(word1, word2) {
  if (word1.length >= word2.length) {
    return word1.length;
  }
  return word2.length;
}

function removeMaior(str) {
  const strArray = str.split(", ");
  const greatestWordLen = strArray.reduce(
    (acc, cur) => biggestWordLen(acc, cur),
    strArray[0].length
  );
  return strArray
    .filter((value) => value.length !== greatestWordLen)
    .join(", ");
}