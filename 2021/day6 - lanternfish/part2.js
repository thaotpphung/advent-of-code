const input = require('./input');
const MAX_DAYS = 256;

/* 
The idea is to instead of actually generate the fish array, we keep track of the count of fish of each type 
The type here is the count down until it gives birth
0 -> giving birth -> double the fish count (each 0 gives a 6 and an 8)

*/
function main() {
  let counts = new Array(9).fill(0);
  // count the initial fish
  input.forEach((fish) => {
    counts[fish]++;
  });

  let spawnCount = 0;
  // for each day, calculate the fish based on previous day (count of each fish shift to the left compared to previous day)
  for (let day = 0; day < MAX_DAYS; day++) {
    // save spawn count at 0 -> later
    // -> add to 6 count (add to current 6 count because there could be a 7 becomes a 6)
    // -> assign to 8 (give birth)
    spawnCount = counts[0];
    for (let fish = 0; fish < counts.length; fish++) {
      counts[fish] = counts[fish + 1];
    }
    counts[6] += spawnCount;
    counts[8] = spawnCount;
  }
  const totalCount = counts.reduce((acc, cur) => acc + cur);
  console.log(totalCount);
}

main();
