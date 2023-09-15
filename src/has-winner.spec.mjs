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

  it('should have a winner with row', () => {
    const board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
    ];

    expect(hasWinner(board)).toEqual(true);
  });

  it('should have a winner with top row', () => {
    const board = [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    expect(hasWinner(board)).toEqual(true);
  });

  it('should have a winner with column', () => {
    const board = [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 1, 1],
    ];

    expect(hasWinner(board)).toEqual(true);
  });
  it('should have a winner with diagonal right', () => {
    const board = [
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 0, 1, 1, 0],
    ];

    expect(hasWinner(board)).toEqual(true);
  });
  it('should have a winner with diagonal left', () => {
    const board = [
      [0, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [1, 0, 0, 0],
    ];

    expect(hasWinner(board)).toEqual(true);
  });

  it('should have a winner with another diagonal left', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0],
    ];

    expect(hasWinner(board)).toEqual(true);
  });

  it('should have a winner with large board', () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0],
      [1, 2, 1, 0, 1, 0],
      [2, 1, 1, 1, 1, 0],
    ];

    expect(hasWinner(board)).toEqual(true);
  });

  it('should have a winner with large board 2', () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0],
      [1, 1, 0, 2, 0, 0],
      [1, 2, 1, 2, 1, 0],
      [2, 1, 1, 2, 1, 0],
    ];

    expect(hasWinner(board)).toEqual(true);
  });
});