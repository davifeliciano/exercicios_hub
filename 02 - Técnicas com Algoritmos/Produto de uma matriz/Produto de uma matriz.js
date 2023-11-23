// escreva seu código aqui :)
function isValidMatrix(matrix) {
  let currentRowCols = matrix[0].length;
  for (let i = 1; i < matrix.length; i++) {
    if (currentRowCols !== matrix[i].length) {
      return false;
    }
  }
  return true;
}

function produtoMatriz(matrix) {
  if (!isValidMatrix(matrix)) return null;
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let prod = 1;
    for (let j = 0; j < matrix[0].length; j++) {
      prod *= matrix[i][j];
    }
    sum += prod;
  }
  return sum;
}