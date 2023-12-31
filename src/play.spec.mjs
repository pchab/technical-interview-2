import { play } from './play.mjs';

describe('play', () => {
  it('places the player marker in the given column at the bottom of the board', () => {
    const board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    play(board, 1, 2);

    expect(board).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
    ]);
  });
});
