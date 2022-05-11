const input = require('./input');

// count number of 0 & 1 bit at each index
function getBitCount() {
  // find 1 & 0 count at each index
  let counts = [];
  for (const num of input) {
    for (const index in num) {
      if (!counts[index]) {
        counts[index] = { 0: 0, 1: 0 };
      }
      counts[index][num[index]]++;
    }
  }
  return counts;
}

// get most or least common bits at each index
function getBits(counts, type) {
  let bits = [];
  counts.forEach((count) => {
    if (
      (type === 'max' && count['1'] > count['0']) ||
      (type === 'min' && count['1'] < count['0'])
    ) {
      bits.push(1);
    } else {
      bits.push(0);
    }
  });
  return bits;
}

function main() {
  let counts = getBitCount();
  let maxBits = getBits(counts, 'max');
  let minBits = getBits(counts, 'min');
  let gamma = parseInt(maxBits.join(''), 2);
  let epsilon = parseInt(minBits.join(''), 2);
  console.log(gamma * epsilon);
}

main();
