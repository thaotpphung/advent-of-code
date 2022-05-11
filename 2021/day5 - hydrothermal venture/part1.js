const input = require('./input');

function main() {
  let mapCount = {};

  for (line of input.lines) {
    let { from, to } = line;
    if (from.x == to.x) {
      let minY = Math.min(from.y, to.y);
      let maxY = Math.max(from.y, to.y);
      for (let y = minY; y <= maxY; y++) {
        let key = 'x' + from.x + 'y' + y;
        if (!mapCount[key]) mapCount[key] = 0;
        mapCount[key] += 1;
      }
    } else if (from.y == to.y) {
      let minX = Math.min(from.x, to.x);
      let maxX = Math.max(from.x, to.x);
      for (let x = minX; x <= maxX; x++) {
        let key = 'x' + x + 'y' + from.y;
        if (!mapCount[key]) mapCount[key] = 0;
        mapCount[key] += 1;
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
