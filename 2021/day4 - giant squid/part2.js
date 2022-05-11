const { numbers, boards } = require('./input');
const Game = require('./game');

function main() {
  let game = new Game(numbers, boards);
  let winBoards;
  let remainingBoardsCount = boards.length;
  while (remainingBoardsCount > 0) {
    winBoards = game.pickNext();
    if (winBoards) {
      remainingBoardsCount -= winBoards.length;
    }
  }

  let [winBoard, ...rest] = winBoards;
  if (rest.length > 0) {
    throw new Error('More than 1 board win last');
  }

  console.log(winBoard.getScore(game.pickedNumbers));
}

main();
