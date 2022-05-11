const input = require('./input');

function countTrees(grid) {
  let count = 0;
  let col = 0;
  // move down 1
  for (let row = 0; row < grid.length; row++) {
    let cell = grid[row][col];
    if (cell === '#') {
      count++;
    }
    // move right 3
    col += 3;
    // for inifinite pattern to the right
    col %= grid[0].length;
  }
  return count;
}

console.log(countTrees(input));
