import { displayBoard, displayWinner } from './display.ts';
import { hasWinner } from './has-winner.ts';
import { play } from './play.ts';

import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';

import type { Board } from './models/board.model.ts';
import { Player } from './models/player.model.ts';

const rl = readline.createInterface({ input, output });

async function main() {
  let playing = Player.None;
  const { width, height } = { width: 6, height: 5 };
  const board: Board = Array.from({ length: height }, () => Array.from({ length: width }, () => 0));

  while (!hasWinner(board)) {
    displayBoard(board);

    playing = playing === Player.One ? Player.Two : Player.One;

    const columnString = await rl.question(`Player ${playing}: Which column do you want to play?`);
    const column = parseInt(columnString, 10) - 1;

    if (column > 0 && column <= width) {
      play(board, playing, column);
    }
  }

  displayWinner(playing);
}

(async () => {
  try {
    await main();
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
})();
