//Programa ai!
function ordenaNumeros(array) {
  const sorted = [...array];
  for (let i = 0; i < array.length; i++) {
    const unsortedSlice = sorted.slice(i);
    let [maxValue, maxIndex] = [- Infinity, 0];
    unsortedSlice.forEach((value, index) => {
      if (value >= maxValue) {
        maxValue = value;
        maxIndex = index;
      }
    });
    [sorted[i], sorted[i + maxIndex]] = [
      sorted[i + maxIndex], sorted[i]  
    ];
  }
  return sorted;
}