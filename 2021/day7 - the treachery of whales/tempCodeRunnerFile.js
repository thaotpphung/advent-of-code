const positions = require('./input');

// sum from 1 -> = n(n + 1)/2 -> Gauss
const fuelCostFrom = (() => {
  const cache = new Map();

  return (fromPosition) => {
    let distance = 0;
    for (let toPosition of positions) {
      let range = Math.abs(fromPosition - toPosition);
      distance += (range * (range + 1)) / 2;
    }
    return distance;
  };
})();

function main() {
  let minPosition = -1;
  let minDistance = Number.MAX_SAFE_INTEGER;
  for (let fromPosition of positions) {
    let distance = fuelCostFrom(fromPosition);

    if (distance < minDistance) {
      minPosition = fromPosition;
      minDistance = distance;
    }
  }
  console.log(minDistance);
  console.log('at pos', minPosition);
}

main();
