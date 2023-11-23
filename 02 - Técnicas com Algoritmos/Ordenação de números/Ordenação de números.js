// escreva seu código aqui :)
function ordenaNumeros(array) {
  const sorted = [...array];
  for (let i = 0; i < array.length; i++) {
    const unsortedSlice = sorted.slice(i);
    let [minValue, minIndex] = [Infinity, 0];
    unsortedSlice.forEach((value, index) => {
      if (value <= minValue) {
        minValue = value;
        minIndex = index;
      }
    });
    [sorted[i], sorted[i + minIndex]] = [
      sorted[i + minIndex], sorted[i]  
    ];
  }
  return sorted;
}