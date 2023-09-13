import { displayBoard, displayWinner } from './display.mjs';
import { play } from './play.mjs';
import { hasWinner } from './has-winner.mjs';

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function main() {
  let playing = 1;
  const { width, height } = { width: 6, height: 5 };
  const board = Array.from({ length: height }, () => Array.from({ length: width }, () => 0));

  while (!hasWinner(board)) {
    displayBoard(board);
    const column = await rl.question(`Player ${playing}: Which column do you want to play?`);
    if (column > 0 && column <= width) {
      play(board, playing, column - 1);
      playing = playing === 1 ? 2 : 1;
    }
  }

  displayWinner(playing === 1 ? 2 : 1);
}

try {
  await main();
} catch (error) {
  console.error(error);
} finally {
  process.exit();
}
