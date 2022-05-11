class Board {
  constructor(blockStr, index) {
    this.index = index;
    let rows = blockStr.split('\n');
    this.blockStr = blockStr;
    this.grid = rows.map((row) =>
      row
        .trim()
        .split(/\s+/)
        .map((v) => parseInt(v, 10))
    );
    this.size = this.grid.length;
    this.cells = {};
    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid.length; col++) {
        let cell = this.grid[row][col];
        this.cells[cell] = [row, col];
      }
    }
    // Top to bottom
    this.bingoRows = Array(this.size).fill(0);
    // Left to right
    this.bingoCols = Array(this.size).fill(0);
  }

  /**
   *
   * @param {Number} number
   * @returns {Boolean}
   */
  has(number) {
    return Boolean(this.cells[number]);
  }

  /**
   * check if adding number results in a bingo row/col, return false otherwise
   * @param {*} number
   * @returns
   */
  add(number) {
    if (!this.has(number)) {
      return false;
    }

    let [row, col] = this.cells[number];
    this.bingoRows[row] += 1;
    this.bingoCols[col] += 1;

    return (
      this.bingoRows[row] === this.size || this.bingoCols[col] === this.size
    );
  }

  /**
   *
   * @returns whether the board has bingo
   */
  hasBingo() {
    return (
      this.bingoRows.some((row) => row === this.size) ||
      this.bingoCols.some((col) => col === this.size)
    );
  }

  getUnPickedNumbers(pickedNumbers) {
    pickedNumbers = pickedNumbers.reduce((acc, num) => {
      acc[num] = true;
      return acc;
    }, {});
    let unpickedNumbers = [];
    for (let num of Object.keys(this.cells)) {
      if (!pickedNumbers[num]) {
        unpickedNumbers.push(parseInt(num, 10));
      }
    }
    return unpickedNumbers;
  }

  getScore(pickedNumbers) {
    let unpickedNumbers = this.getUnPickedNumbers(pickedNumbers);
    let unpickedNumbersSum = unpickedNumbers.reduce((acc, cur) => acc + cur, 0);
    return unpickedNumbersSum * pickedNumbers[pickedNumbers.length - 1];
  }
}

module.exports = Board;
