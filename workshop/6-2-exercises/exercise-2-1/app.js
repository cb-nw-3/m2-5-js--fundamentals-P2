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

let board = document.querySelector("#board");
board.style.width = "600px";
board.style.height = "600px";
board.style.gridTemplateColumns =
  "calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px)";
board.style.gridTemplateRows =
  "calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px) calc(10% - 2px)";

for (let i = 0; i < 100; i++) {
  let newCell = document.createElement("div");
  newCell.setAttribute("class", "cell");
  newCell.setAttribute("id", "cell-" + (i + 1));
  board.appendChild(newCell);
}
