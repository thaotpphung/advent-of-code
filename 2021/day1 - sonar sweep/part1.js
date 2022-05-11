/*
  Count the number of times a depth measurement increases from the previous measurement.
*/

const { input } = require('./input.js');

function main() {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (i > 0 && input[i] > input[i - 1]) count++;
  }
  console.log(count);
}

main();
