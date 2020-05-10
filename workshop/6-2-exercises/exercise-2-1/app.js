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

// grab the board
let board = document.querySelector('.board');

// amount of cells in a row desired
const numberOfCell = 6;

// style the board
board.setAttribute('style', 
  `width: 600px;
  height: 600px;
  grid-template-rows: repeat(${numberOfCell}, 1fr);
  grid-template-columns: repeat(${numberOfCell}, 1fr);`
);

// initialize the cells
let cells;

// loop through the square of numberOfCell 
for (let i = 0; i < numberOfCell ** 2; i++) {
  // create the cell
  cells = document.createElement('div');
  // add the class of .cell
  cells.classList.add('cell');
  // add the id cell-#
  cells.id = `cell-${i + 1}`;
  // add the cell to the board
  board.appendChild(cells);
}
