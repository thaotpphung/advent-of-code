const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.join(__dirname, './input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .reduce(
    (acc, cur) => {
      let [str1, str2] = cur.split(' -> ');
      let [x1, y1] = str1.split(',').map((num) => parseInt(num, 10));
      let [x2, y2] = str2.split(',').map((num) => parseInt(num, 10));
      acc.lines.push({ from: { x: x1, y: y1 }, to: { x: x2, y: y2 } });
      return acc;
    },
    { lines: [] }
  );

module.exports = input;
