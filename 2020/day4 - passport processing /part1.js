const input = require('./input');

function countValid() {
  let count = 0;
  input.forEach((entry) => {
    let fieldCount = Object.keys(entry).length;
    if (fieldCount === 8 || (fieldCount === 7 && !entry['cid'])) {
      count++;
    }
  });
  return count;
}

console.log(countValid());
a;
