const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.join(__dirname, './input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n\n')
  .reduce((acc, cur) => {
    let entry = {};
    cur.split('\n').forEach((line) => {
      line.split(' ').forEach((token) => {
        let [k, v] = token.split(':');
        entry[k] = v;
      });
    });
    acc.push(entry);
    return acc;
  }, []);

module.exports = input;
