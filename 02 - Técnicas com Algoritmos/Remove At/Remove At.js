//Coda ai!
function removeAt(index, str) {
  if (str[index] === undefined) return str;
  return str.slice(0, index) + str.slice(index + 1);
}