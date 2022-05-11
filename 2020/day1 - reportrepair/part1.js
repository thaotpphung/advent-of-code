const arr = require('./input');
const target = 2020;

function twoSumSet(arr) {
  let set = new Set();
  for (let num of arr) {
    let complement = target - num;
    if (set.has(complement)) {
      // found 2 sum
      return complement * num;
    }
    set.add(num);
  }
  throw new Error('cannot find two sum');
}

function main(arr) {
  return twoSumSet(arr);
}

main();
