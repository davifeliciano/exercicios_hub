//Programa ai!
function deslocaLetras(str) {
  const strArray = str.split("");
  strArray.push(strArray.shift());
  return strArray.join("");
}