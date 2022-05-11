const input = require('./input');

// count number of 0 & 1 bit at each index after going through the whole number array
// return the count of 0 & 1 at each index
function getBitCountAtPos(nums, pos) {
  let count = { 0: 0, 1: 0 };
  nums.forEach((num) => {
    count[num[pos]]++;
  });
  return count;
}

// most common/least common value at position
// return '0' or '1'
function getBitCriteriaAtPos(nums, type, pos) {
  let bitCountAtPos = getBitCountAtPos(nums, pos);
  if (bitCountAtPos[0] == bitCountAtPos[1]) {
    return type == 'max' ? 1 : 0;
  } else if (bitCountAtPos[0] > bitCountAtPos[1]) {
    return type == 'max' ? 0 : 1;
  } else {
    return type == 'max' ? 1 : 0;
  }
}

function getRating(type) {
  let nums = [...input];
  let numLen = input[0].length;

  for (let pos = 0; pos < numLen; pos++) {
    // find the bit criteria at pos
    let bitCriteria = getBitCriteriaAtPos(nums, type, pos);
    // filter out num with bit at pos that doesn't match criteria
    nums = nums.filter((num) => {
      return num[pos] == bitCriteria;
    });
    // return if there's only 1 left
    if (nums.length == 1) {
      break;
    }
  }

  return parseInt(nums[0], 2);
}

function main() {
  let oxygenRating = getRating('max');
  let co2Rating = getRating('min');
  console.log(oxygenRating * co2Rating);
}

main();
