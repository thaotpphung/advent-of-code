const arr = require('./input');

function countChar(str) {
  let count = {};
  str.split('').forEach((c) => {
    count[c] ? count[c]++ : (count[c] = 1);
  });
  return count;
}

function countValid(arr) {
  let count = 0;
  let countMap = {};
  for (let i = 0; i < arr.length; i++) {
    let { password, char, min, max } = arr[i];
    countMap = countChar(password);
    if (countMap[char] >= min && countMap[char] <= max) {
      count++;
    }
  }
  return count;
}

function main() {
  console.log(countValid(arr));
}

main();
