//Programa ai!
function isSquareMatrix(matrix) {
  const numberOfRows = matrix.length;
  for (const row of matrix) {
    if (row.length !== numberOfRows) {
      return false;
    }
  }
  return true;
}

function somaDiagonais(matrix) {
  if (!isSquareMatrix(matrix)) return 0;
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i] + matrix[i][matrix.length - i - 1];
  }
  console.log(sum);
  const midIndex = Math.floor(matrix.length / 2);
  sum -= matrix[midIndex][midIndex];
  return sum;
}