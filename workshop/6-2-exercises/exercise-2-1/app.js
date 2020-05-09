// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'

const BOARD = document.querySelector("#board");
console.log(BOARD);
BOARD.style.width = "600px";
BOARD.style.height = "600px";

for (let i = 1; i <= 64; i++) {
  const CELL = document.createElement("div");
  CELL.id = `cell-${i}`;
  CELL.classList.add("cell");
  CELL.style.width = "72px";
  CELL.style.height = "72px";
  BOARD.appendChild(CELL);
}
