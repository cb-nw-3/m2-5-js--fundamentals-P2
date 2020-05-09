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

const boardSize = 600;
const rows = 8;
const columns = 8;

const boardElement = document.querySelector("#board");

boardElement.setAttribute(
  "style",
  `width: ${boardSize}px; 
  height: ${boardSize}px;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);`
);

for (let i = 0; i < rows * columns; i++) {
  let newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.setAttribute("id", `cell-${i}`);

  boardElement.appendChild(newCell);
}
