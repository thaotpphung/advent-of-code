const arr = require('./input');
const target = 2020;

// O(n) time, O(n) space
function twoSum(arr, i) {
  let set = new Set();
  for (let j = i + 1; j < arr.length; j++) {
    let complement = target - arr[i] - arr[j];
    if (set.has(complement)) {
      // found sum
      return arr[j] * arr[i] * complement;
    }
    set.add(arr[j]);
  }
  return null;
}

// O(n) time, O(1) mem
function twoSum2(arr, i) {
  let left = i + 1,
    right = arr.length,
    sum = 0;
  while (left < right) {
    sum = arr[i] + arr[left] + arr[right];
    if (sum === target) {
      return arr[i] * arr[left] * arr[right];
    } else if (sum > target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

function threeSum(arr) {
  arr.sort();
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || arr[i] != arr[i - 1]) {
      res = twoSum2(arr, i);
      if (res) return res;
    }
  }
  throw new Error('illegal argument');
}

function main() {
  console.log(threeSum(arr));
}
main();
