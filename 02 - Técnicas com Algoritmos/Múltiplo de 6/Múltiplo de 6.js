//Coda ai!
function multiploDeSeis(array) {
  for (const value of array) {
    if (value % 6 === 0) return value;
  }
  return -1;
}