function ataquesDaRainha (boardDimensions, queenPosition) {
  /* Esse algoritmo funciona também em um caso mais geral com
     boards não quadrados */
  const [boardCols, boardRows] = [boardDimensions, boardDimensions];
  const [queenCol, queenRow] = queenPosition;
  const atackedPositions = [];
  
  for (let row = 1; row <= boardRows; row++) {
    // Squares with same col as the queen
    if (row !== queenRow) {
      atackedPositions.push([queenCol, row]);
    }
    
    const colsAwayFromQueen = Math.abs(row - queenRow);
    const leftmostAtackedColAtRow = queenCol - colsAwayFromQueen;
    const rightmostAtackedColAtRow = queenCol + colsAwayFromQueen;
    
    if (
      leftmostAtackedColAtRow > 0 &&
      leftmostAtackedColAtRow !== queenCol
    ) {
      atackedPositions.push([leftmostAtackedColAtRow, row]);
    }
    
    if (
      rightmostAtackedColAtRow <= boardCols &&
      rightmostAtackedColAtRow !== queenCol
    ) {
      atackedPositions.push([rightmostAtackedColAtRow, row]);
    }
  }
  
  for (let col = 1; col <= boardCols; col++) {
    // Squares with same row as the queen
    if (col !== queenCol) {
      atackedPositions.push([col, queenRow]);
    }
  }
  
  // Fazendno o sort na saida para passar no avaliador
  return atackedPositions.sort((a, b) => {
    const [aCol, aRow] = a;
    const [bCol, bRow] = b;
    if (aCol === bCol) return aRow - bRow;
    return aCol - bCol;
  });
}