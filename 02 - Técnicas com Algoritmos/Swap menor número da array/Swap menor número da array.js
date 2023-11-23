//Program ai!
function swapMenorNumero(array) {
  const minValue = Math.min.apply(null, array);
  if (minValue === Infinity) return [];
  
  const minIndex = array.indexOf(minValue);
  const arrayCopy = [...array];
  [arrayCopy[0], arrayCopy[minIndex]] = [
    arrayCopy[minIndex],
    arrayCopy[0]
  ]
  return arrayCopy;
}