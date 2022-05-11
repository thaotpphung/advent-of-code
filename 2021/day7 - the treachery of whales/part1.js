const positions = require('./input');

const fuelCostFrom = (() => {
  // position - distance of position with value to other positions in the map
  // because the position, ex: 2, could appear many times, and the calculation is the same, we want to save the calculation process
  // by caching the result for that position
  const cache = new Map();

  return (position) => {
    // if calculation for the position was done before, return the calculation
    if (!cache.has(position)) {
      // calculate distance for the this position
      let distance = 0;
      for (let otherPosition of positions) {
        distance += Math.abs(position - otherPosition);
      }
      cache.set(position, distance);
    }
    return cache.get(position);
  };
})();

function main() {
  let minPosition = -1;
  let minDistance = Number.MAX_SAFE_INTEGER;
  // for each position, we calculate the sum of cost from that position to all other positions
  for (let index = 0; index < positions.length; index++) {
    let distance = fuelCostFrom(positions[index]);
    if (distance < minDistance) {
      minPosition = positions[index];
      minDistance = distance;
    }
  }
  console.log(minDistance);
  console.log('at pos', minPosition);
}

main();
