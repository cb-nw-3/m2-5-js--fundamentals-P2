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

let gameBoard = document.querySelector("#board");
gameBoard.setAttribute(
  "style",
  "height: 600px; width: 600px; display:grid; grid-template-columns: repeat(6, 1fr); grid-template-rows: repeat(6, 1fr)"
);
for (let i = 0; i < 36; i++) {
  let tableCell = document.createElement("div");
  tableCell.setAttribute("id", "cell-#" + i);
  tableCell.classList.add("cell");

  gameBoard.append(tableCell);
}
