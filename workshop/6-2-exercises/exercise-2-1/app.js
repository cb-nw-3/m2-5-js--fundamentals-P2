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
// - cells should have and id of 'cell-#''

const boardElement = document.getElementById('board');

//set board size
boardElement.style.height = '600px';
boardElement.style.width = '600px';

//set number of rows and columns
const ROWS = 10;
const COLUMNS = 10;

//add grid cells
boardElement.style.gridTemplateRows = `repeat(${ROWS},auto)`;
boardElement.style.gridTemplateColumns = `repeat(${COLUMNS},auto)`;

//add elements into grid
for(let i = 0; i < ROWS * COLUMNS; i++ ) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  cell.setAttribute('id', `cell-${i+1}`);
  boardElement.appendChild(cell);
}
