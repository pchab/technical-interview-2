import type { Board } from './models/board.model.ts';
import type { Player } from './models/player.model.ts';

export const play = (board: Board, player: Player, column: number) => {
  const height = board.length;
  board[height - 1][column] = player;
}
