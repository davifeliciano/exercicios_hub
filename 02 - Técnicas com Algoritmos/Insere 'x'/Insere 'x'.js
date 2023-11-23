//Coda ai
function insertIntoIndex(value, index, array) {
  return [...array.slice(0, index), value, ...array.slice(index)];
}

function insere(num, array) {
  const indexToInsert = array.findIndex(value => value >= num);
  return indexToInsert === -1 ? [...array, num]
                              : insertIntoIndex(num, indexToInsert, array);
}