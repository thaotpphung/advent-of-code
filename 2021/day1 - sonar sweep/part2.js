const { input } = require('./input.js');

function main() {
  let sum = 0;
  let prevSum = 0;
  let count = 0;

  // slide window
  for (let i = 0; i < input.length; i++) {
    prevSum = sum;
    sum += input[i];
    if (i >= 3) {
      sum -= input[i - 3];
      if (sum > prevSum) {
        count++;
      }
    }
  }
  console.log(count);
}

main();
