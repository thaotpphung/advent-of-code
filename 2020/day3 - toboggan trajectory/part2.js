const input = require('./input');

function countTrees(grid, [dx, dy]) {
  let count = 0;
  let col = 0;
  // move down 1
  for (let row = 0; row < grid.length; row += dy) {
    let cell = grid[row][col];
    if (cell === '#') {
      count++;
    }
    // move right 3
    col += dx;
    // for inifinite pattern to the right
    col %= grid[0].length;
  }
  return count;
}

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

function countTreesWithSlopes(slopes) {
  return slopes
    .map((slope) => countTrees(input, slope))
    .reduce((acc, count) => acc * count);
}

console.log(countTreesWithSlopes(slopes));
