//Programa ai
function isValidMatrix(matrix) {
  let currentRowCols = matrix[0].length;
  for (let i = 1; i < matrix.length; i++) {
    if (currentRowCols !== matrix[i].length) {
      return false;
    }
  }
  return true;
}

function produtorioColuna(col, matrix) {
  if (!isValidMatrix(matrix)) return null;
  const matrixCols = matrix[0].length;
  if (col < 0 || col >= matrixCols) return null;
  let prod = 1;
  for (let i = 0; i < matrix.length; i++) {
    prod *= matrix[i][col];
  }
  return prod;
}