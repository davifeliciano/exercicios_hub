//Programa ai!
function adicionaCedilha(str, index) {
  if (str[index] === undefined) {
    return str + "ç";
  }
  return str.slice(0, index) + "ç" + str.slice(index);
}