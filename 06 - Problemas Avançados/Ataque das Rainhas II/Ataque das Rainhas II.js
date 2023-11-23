function getRanges(n, queenPos, filteredPieces) {
  // Return n object with iteration ranges corresponding
  // to the possible squares the queen can move to (without taking
  // any pieces) for each possible direction (row, col, first diagonal
  // and second diagonal). For the diagonals, the range are given
  // with respect to the columns. The ranges always contains the queen.
  const [queenCol, queenRow] = queenPos;
  
  const ranges = {
    col: [1, n],
    row: [1, n],
    firstDiag: [
      Math.max(1, queenCol + queenRow - n),
      Math.min(n, queenCol + queenRow - 1),
    ],
    secondDiag: [
      Math.max(1, queenCol - queenRow + 1),
      Math.min(n, queenCol - queenRow + n),
    ],
  };
  
  filteredPieces.forEach(piecePos => {
    const [pieceCol, pieceRow] = piecePos;
    
    if (pieceCol === queenCol) {
      if (pieceRow < queenRow && pieceRow > ranges.col[0]) {
        ranges.col[0] = pieceRow + 1;
      }
      
      if (pieceRow > queenRow && pieceRow < ranges.col[1]) {
        ranges.col[1] = pieceRow - 1;
      }
    }
    
    if (pieceRow === queenRow) {
      if (pieceCol < queenCol && pieceCol > ranges.row[0]) {
        ranges.row[0] = pieceCol + 1;
      }
      
      if (pieceCol > queenCol && pieceCol < ranges.row[1]) {
        ranges.row[1] = pieceCol - 1;
      }
    }
    
    const horizontalRelativeDistance = pieceCol - queenCol;
    const verticalRelativeDistance = pieceRow - queenRow;
    
    if (horizontalRelativeDistance === -verticalRelativeDistance) {
      if (pieceCol < queenCol && pieceCol > ranges.firstDiag[0]) {
        ranges.firstDiag[0] = pieceCol + 1;
      }
      
      if (pieceCol > queenCol && pieceCol < ranges.firstDiag[1]) {
        ranges.firstDiag[1] = pieceCol - 1;
      }
    }
    
    if (horizontalRelativeDistance === verticalRelativeDistance) {
      if (pieceCol < queenCol && pieceCol > ranges.secondDiag[0]) {
        ranges.secondDiag[0] = pieceCol + 1;
      }
      
      if (pieceCol > queenCol && pieceCol < ranges.secondDiag[1]) {
        ranges.secondDiag[1] = pieceCol - 1;
      }
    }
  });
  
  return ranges;
}

function ataquesDaRainha(n, queenPos, pieces) {
  const [queenCol, queenRow] = queenPos;
  const ranges = getRanges(n, queenPos, pieces);
  const attackedPositions = [];
  
  // Squares on the same col as the queen
  for (let row = ranges.row[0]; row <= ranges.row[1]; row++) {
    if (row !== queenRow) attackedPositions.push([queenCol, row]);
  }
  
  // Squares on the same row as the queen
  for (let col = ranges.col[0]; col <= ranges.col[1]; col++) {
    if (col !== queenCol) attackedPositions.push([col, queenRow]);
  }
  
  // Squares on the same first diagonal as the queen
  for (let col = ranges.firstDiag[0]; col <= ranges.firstDiag[1]; col++) {
    if (col === queenCol) continue;
    const relativeDistanceFromQueen = col - queenCol;
    const row = queenRow + relativeDistanceFromQueen;
    attackedPositions.push([col, row]);
  }
  
  // Squares on the same second diagonal as the queen
  for (let col = ranges.secondDiag[0]; col <= ranges.secondDiag[1]; col++) {
    if (col === queenCol) continue;
    const relativeDistanceFromQueen = col - queenCol;
    const row = queenRow - relativeDistanceFromQueen;
    attackedPositions.push([col, row]);
  }
  
  return attackedPositions.length;
}