const { numbers, boards } = require('./input');
const Game = require('./game');

function main() {
  let game = new Game(numbers, boards);

  let winBoards;
  while (!winBoards) {
    winBoards = game.pickNext();
  }

  let [winBoard, ...rest] = winBoards;
  if (rest.length > 0) {
    throw new Error('More than one board won!');
  }

  console.log(winBoard.getScore(game.pickedNumbers));
}

main();
