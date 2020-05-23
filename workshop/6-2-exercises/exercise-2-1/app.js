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

let board = document.getElementById("board");
board.style.height = "600px";
board.style.width = "600px";
board.style.gridTemplateColumns = "repeat(10, auto)";
board.style.gridTemplateRows = "repeat(10, auto)";
board.style.gridGap = "black";

let COLUMNS = 10; // (board.style.gridTemplateColumns = "repeat(10, auto)");
let ROWS = 10; //(board.style.gridTemplateColumns = "repeat(10, auto)"); as javascript is not reading here the css properties

function addCell(cellNum) {
  let cell = document.createElement("div");
  cell.id = `cell-${cellNum}`;
  cell.classList.add("cell");
  return cell;
}

function parentCells() {
  let board = document.getElementById("board");
  for (let cellNum = 0; cellNum < ROWS * COLUMNS; cellNum++)
    board.appendChild(addCell(cellNum));
}
parentCells();
