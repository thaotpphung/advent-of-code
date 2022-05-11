const input = require('./input');

function incrementKey(mapCount, x, y) {
  let key = 'x' + x + 'y' + y;
  if (!mapCount[key]) mapCount[key] = 0;
  mapCount[key] += 1;
}

function main() {
  let mapCount = {};

  for (line of input.lines) {
    let { from, to } = line;
    let minY = Math.min(from.y, to.y);
    let maxY = Math.max(from.y, to.y);
    let minX = Math.min(from.x, to.x);
    let maxX = Math.max(from.x, to.x);
    if (from.x == to.x) {
      // vertial
      for (let y = minY; y <= maxY; y++) {
        incrementKey(mapCount, from.x, y);
      }
    } else if (from.y == to.y) {
      // horizontal
      for (let x = minX; x <= maxX; x++) {
        incrementKey(mapCount, x, from.y);
      }
    }
    if (maxX - minX === maxY - minY) {
      // diagonal
      // determine direction from-to: 1 -> ncreasing, -1 -> decreasing
      const dx = from.x > to.x ? -1 : 1;
      const dy = from.y > to.y ? -1 : 1;
      let y = from.y;
      for (let x = from.x; from.x > to.x ? x >= to.x : x <= to.x; x += dx) {
        incrementKey(mapCount, x, y);
        y += dy;
      }
    }
  }

  let res = Object.values(mapCount).reduce((acc, cur) => {
    if (cur >= 2) acc++;
    return acc;
  }, 0);

  console.log(res);
}

main();
