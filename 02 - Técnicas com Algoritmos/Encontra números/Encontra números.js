//Programa ai
function isDigit(char) {
  if (isNaN(parseInt(char))) {
    return false;
  }
  return true;
}

function indexNum(str) {
  const strArray = str.split("");
  return strArray
    .filter((char) => isDigit(char))
    .map((char) => {
      const index = strArray.indexOf(char);
      strArray[index] = ""; // Evita repetição do mesmo index
      return index;
    });
}