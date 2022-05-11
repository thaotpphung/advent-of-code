const fs = require('fs');
const path = require('path');
const Board = require('./board');

const input = fs
  .readFileSync(path.join(__dirname, './input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n\n')
  .reduce(
    (acc, cur, index) => {
      if (index === 0) {
        acc.numbers = cur.split(',').map((value) => parseInt(value, 10));
      } else {
        acc.boards.push(new Board(cur, index - 1));
      }
      return acc;
    },
    { numbers: undefined, boards: [] }
  );

module.exports = input;
