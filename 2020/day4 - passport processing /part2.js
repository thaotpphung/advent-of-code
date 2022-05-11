const input = require('./input');
const validate = require('./validate');

function countValid() {
  let count = 0;
  input.forEach((entry) => {
    let fieldCount = Object.keys(entry).length;
    if (
      (fieldCount === 8 && validate(entry)) ||
      (fieldCount === 7 && !entry['cid'] && validate(entry))
    ) {
      count++;
    }
  });
  return count;
}

console.log(countValid());
