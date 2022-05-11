const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.join(__dirname, './input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((line) => {
    let [range, char] = line.split(': ')[0].trim().split(' ');
    return {
      password: line.split(': ')[1].trim(),
      char,
      min: parseInt(range.split('-')[0], 10),
      max: parseInt(range.split('-')[1], 10),
    };
  });

module.exports = input;
