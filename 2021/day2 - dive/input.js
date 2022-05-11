const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((line) => {
    let [direction, step] = line.split(' ');
    step = parseInt(step, 10);
    return {
      direction,
      step,
    };
  });

module.exports = {
  input,
};
