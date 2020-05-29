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

// - set the size of the board to a square of 600px;
const boardSize = '600px';

// - Set a number of column;
const columns = 5;

// - Set a number of row;
const rows = 5;

// Create a board
const board = document.getElementById('board');

// Set the board with square size
board.style.height = board.style.width = boardSize;
board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;


for (let cellNum = 0; cellNum < rows * columns; cellNum++) {
  const cell = document.createElement('div');
  
  // - cells should have and id of 'cell-#'
  cell.id = `cell-${cellNum}`;

  // - cells should have a class of 'cell'
  cell.classList.add('cell');
  
  board.appendChild(cell);
}
