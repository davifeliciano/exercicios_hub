//Programa ai!
function textoEscondido(array) {
  let result = [];
  for (const words of array) {
    for (const word of words) {
      if (typeof word === "string")
        result.push(word);
    }
  }
  return result.join(" ");
}