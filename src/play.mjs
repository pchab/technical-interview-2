export const play = (board, player, column) => {
  const height = board.length;
  board[height - 1][column] = player;
}
