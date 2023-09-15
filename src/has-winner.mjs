import { getRow, getColumn, getDiagonalDownRight, getDiagonalDownLeft } from './utils.mjs';

function isLineWinning(line) {
  return line[0] !== 0
    && line.length === 4
    && line.every(cell => cell === line[0]);
}

export const hasWinner = (board) => {
  return board.some((_, row) => _.some((_, column) => {
    return [
      getRow(board, row, column),
      getColumn(board, row, column),
      getDiagonalDownRight(board, row, column),
      getDiagonalDownLeft(board, row, column),
    ].some(isLineWinning);
  }));
};
