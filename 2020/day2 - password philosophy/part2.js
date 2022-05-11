const arr = require('./input');

function countValid(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let { password, char, min, max } = arr[i];
    if (
      (password.charAt(min - 1) === char &&
        password.charAt(max - 1) !== char) ||
      (password.charAt(min - 1) !== char && password.charAt(max - 1) === char)
    ) {
      count++;
    }
  }
  return count;
}

function main() {
  console.log(countValid(arr));
}

main();
