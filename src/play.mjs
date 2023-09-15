export const play = (board, player, column) => {
  const height = board.length;
  for (let row = height - 1; row >= 0; row--) {
    if (board[row][column] === 0) {
      board[row][column] = player;
      break;
    }
  }
  //board[height - 1][column] = player;
}
