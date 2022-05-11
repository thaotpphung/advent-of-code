const { input } = require('./input.js');

function main() {
  let depth = 0; // vertical position
  let length = 0; // horizontal position
  let aim = 0;

  for (let { direction, step } of input) {
    switch (direction) {
      case 'forward': {
        length += step;
        depth += step * aim;
        break;
      }
      case 'up':
        aim -= step;
        break;
      case 'down':
        aim += step;
        break;
      default:
        throw new Error(`Unknown movement: ${direction}`);
    }
  }

  console.log(depth * length);
}

main();
