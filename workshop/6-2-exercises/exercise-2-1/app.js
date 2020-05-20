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

let boardWidth = 600;
let boardHeight = 600;
let columns = 3;
let rows = 3;
let board = document.getElementById("board");

board.style.width = `${boardWidth}px`;
board.style.height = `${boardHeight}px`;
board.style.gridTemplateRows = `repeat(${rows},1fr)`;
board.style.gridTemplateColumns = `repeat(${columns},1fr)`;

for (let i = 0; i <= (columns * rows) - 1; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell-${i}`;
    
    board.appendChild(cell);
}