import CLI from 'clui';
import clc from 'cli-color';

const { LineBuffer, Line } = CLI;
const playerColors = [clc.white, clc.red, clc.blue];

export const displayBoard = (board) => {
  const outputBuffer = new LineBuffer({
    x: 0,
    y: 0,
    width: 'console',
    height: 'console'
  });

  board.forEach((row) => {
    const newLine = new Line(outputBuffer);
    row.forEach((cell) => {
      newLine.column('■', 1, [playerColors[cell]]);
    });
    newLine
      .fill()
      .store();
  });

  outputBuffer.output();
}

export const displayWinner = (winner) => {
  const outputBuffer = new LineBuffer({
    x: 0,
    y: 0,
    width: 'console',
    height: 'console'
  });

  new Line(outputBuffer)
    .column(`Player ${winner} won !`, 14, [playerColors[0]])
    .fill()
    .store();

  outputBuffer.output();
}
