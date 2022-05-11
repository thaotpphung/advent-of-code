const input = require('./input');

const MAX_ROW = 127;
const MAX_COL = 7;

function findId(line) {
  let rowRange = [0, MAX_ROW];
  let colRange = [0, MAX_COL];
  let halfRow = 0;
  let halfCol = 0;
  for (let i = 0; i < line.length; i++) {
    const char = line.charAt(i);
    halfRow = Math.floor((rowRange[1] - rowRange[0] + 1) / 2);
    halfCol = Math.floor((colRange[1] - colRange[0] + 1) / 2);
    switch (char) {
      case 'F':
        rowRange[1] -= halfRow;
        break;
      case 'B':
        rowRange[0] += halfRow;
        break;
      case 'L':
        colRange[1] -= halfCol;
        break;
      case 'R':
        colRange[0] += halfCol;
        break;
      default:
        throw new Error('Illegal argument');
    }
  }
  return rowRange[0] * 8 + colRange[0];
}

function findMaxId(input) {
  let ids = input.map((val) => findId(val)).sort((a, b) => a - b);
  for (let i = 1; i < ids.length; i++) {
    if (ids[i] != ids[i - 1] + 1) {
      return ids[i] - 1;
    }
  }
  throw new Error('Illegal argument');
}

console.log(findMaxId(input));
