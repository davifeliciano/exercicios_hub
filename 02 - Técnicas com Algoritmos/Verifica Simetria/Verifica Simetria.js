//Programa ai!
function isValidMatrix(matrix) {
  let currentRowCols = matrix[0].length;
  for (let i = 1; i < matrix.length; i++) {
    if (currentRowCols !== matrix[i].length) {
      return false;
    }
  }
  return true;
}

function isSquareMatrix(matrix) {
  if (!isValidMatrix(matrix)) return null;
  const numberOfRows = matrix.length;
  for (const row of matrix) {
    if (row.length !== numberOfRows) {
      return false;
    }
  }
  return true;
}


function verificaSimetria(matrix) {
  if (!isSquareMatrix(matrix)) return null;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (matrix[i][j] !== matrix[j][i]) return false;
    }
  }
  return true;
}