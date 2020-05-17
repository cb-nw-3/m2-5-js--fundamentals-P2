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

// Settings
const boardSize = 600;
//
const rows = 10;
const columns = 10;

// The Board
const board = document.getElementById('board');
// This selects the board element <div>
board.style.height = board.style.width = boardSize + 'px';
// This adds the width to ID 'board'
board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
// This determines the dimension of the board, from the settings above and decides how many space it should occupy in the grid

for (let cellNum = 0; cellNum < rows * columns; cellNum++) {
  const cell = document.createElement('div');
  cell.id = `cell-${cellNum}`;
  cell.classList.add('cell');
  // This creates the 100 <div> element and give them an ID and Class.
  board.appendChild(cell);
  // This will apend the the element to their parent "board"
}
// The "for" loop will create the cell and apend them.
