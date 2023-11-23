//Programa ai
function string3(array) {
  for (const word of array) {
    if (word.length === 3) return word;
  }
  return "";
}