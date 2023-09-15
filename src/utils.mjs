export function getRow(board, row, column) {
  return board[row]
    .slice(column, column + 4);
}

export function getColumn(board, row, column) {
  return board
    .map(row => row[column])
    .slice(row, row + 4);
}

export function getDiagonalDownRight(board, row, column) {
  return board
    .slice(row)
    .map((row, index) => row[column + index])
    .slice(0, 4);
}

export function getDiagonalDownLeft(board, row, column) {
  return board
    .slice(row)
    .map((row, index) => row[column - index])
    .slice(0, 4);
}