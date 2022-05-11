class Game {
  /**
   * @param {Number[]} numbers
   * @param {Board[]} boards
   */
  constructor(numbers, boards) {
    // Start at -1 so "pick next" will pick the first one
    this.pickedIndex = -1;
    this.numbers = numbers;
    this.boards = boards;
    this.pickedNumbers = [];
  }

  pickNext() {
    this.pickedIndex++;
    let number = this.numbers[this.pickedIndex];
    this.pickedNumbers.push(number);

    let bingos = [];
    for (let board of this.boards) {
      // make sure we don't add board the already won
      if (board.hasBingo()) {
        continue;
      }
      if (board.add(number)) {
        bingos.push(board);
      }
    }

    if (bingos.length > 0) {
      return bingos;
    }

    return false;
  }
}

module.exports = Game;
