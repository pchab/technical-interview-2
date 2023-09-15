import { getRow, getColumn, getDiagonalDownRight, getDiagonalDownLeft } from './utils.mjs';

describe('get row', () => {
  it('should return the row from 0,0', () => {
    const board = [
      [2, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 1, 0],
    ];

    expect(getRow(board, 0, 0)).toEqual([2, 0, 1, 0]);
  });

  it('should return the row from 2,1', () => {
    const board = [
      [2, 0, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 2, 0],
      [0, 0, 1, 0, 0],
    ];

    expect(getRow(board, 2, 1)).toEqual([0, 0, 2, 0]);
  });
});

describe('get column', () => {
  it('should return the column from 0,0', () => {
    const board = [
      [2, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 1, 0],
    ];

    expect(getColumn(board, 0, 0)).toEqual([2, 0, 0, 0]);
  });

  it('should return the column from 1,1', () => {
    const board = [
      [2, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 1, 0],
      [0, 2, 1, 0],
    ];

    expect(getColumn(board, 1, 1)).toEqual([1, 0, 0, 2]);
  });
});

describe('get diagonal down right', () => {
  it('should return the diagonal from 0,0', () => {
    const board = [
      [2, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 1, 0],
    ];

    expect(getDiagonalDownRight(board, 0, 0)).toEqual([2, 1, 0, 0]);
  });

  it('should return the diagonal from 0, 1', () => {
    const board = [
      [2, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 1, 0],
    ];

    expect(getDiagonalDownRight(board, 0, 1)).toEqual([0, 0, 2]);
  });

  it('should return the diagonal from 1, 1', () => {
    const board = [
      [2, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 1, 0],
    ];

    expect(getDiagonalDownRight(board, 1, 1)).toEqual([1, 0, 0]);
  });
});


describe('get diagonal down left', () => {
  it('should return the diagonal down left from 0,3', () => {
    const board = [
      [2, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 9, 0, 2],
      [0, 0, 1, 0],
    ];

    expect(getDiagonalDownLeft(board, 0, 3)).toEqual([0, 0, 9, 0]);
  });

  it('should return the diagonal from 0, 1', () => {
    const board = [
      [2, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 1, 0],
    ];

    expect(getDiagonalDownLeft(board, 0, 1)).toEqual([0, 0]);
  });

  it('should return the diagonal from 1, 1', () => {
    const board = [
      [2, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 1, 0],
    ];

    expect(getDiagonalDownLeft(board, 1, 1)).toEqual([1, 0]);
  });
});