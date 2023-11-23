//Programa ai!
function verificaRepetidos(array) {
  const repeatedValues = [];
  array.forEach((value, index) => {
    const nextOccurenceIndex = array
      .slice(index + 1)
      .indexOf(value);
    if (nextOccurenceIndex !== -1 && !repeatedValues.includes(value)) {
      repeatedValues.push(value)
    }
  })
  return repeatedValues;
}