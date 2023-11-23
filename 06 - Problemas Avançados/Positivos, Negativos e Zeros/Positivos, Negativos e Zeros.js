function posNegZerosRatio(array) {
  
  const filterPositive = (num) => num > 0;
  const filterNegative = (num) => num < 0;
  const filterZero = (num) => num === 0;
  const filterFunctions = [
    filterPositive,
    filterNegative,
    filterZero
  ]
  
  for (const func of filterFunctions) {
    const filteredArr = array.filter(func);
    const ratio = filteredArr.length / array.length;
    console.log(ratio.toFixed(6));
  }
  
}