import { hasWinner } from './has-winner.mjs';

describe('has winner', () => {
  it('should not have a winner in a starter board', () => {
    const board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    expect(hasWinner(board)).toEqual(false);
  });
});