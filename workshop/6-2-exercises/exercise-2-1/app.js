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

let BoardSize = 600;
let ROWS = 20;
let COLUMNS = 20;

let board = document.getElementById('board');
board.style.height = board.style.width = `${BoardSize}px`;

board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;
board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;

for (let i = 0; i = COLUMNS*ROWS; i++){
    let cell = document.createElement('div')
    cell.id = `cell-${i}`;
    cell.classList.add('cell');
    board.appendChild(cell);
}