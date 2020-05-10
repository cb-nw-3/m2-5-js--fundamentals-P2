// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)

// grab the board
let board = document.querySelector('#board');

// grab the input element
let rowInput = document.querySelector('#rows-input');
let columnInput = document.querySelector('#columns-input');

// initialize input variables
let cellRow;
let cellColumn;

// initialize the cells
let cells;

// set the width and the height of the board
board.setAttribute('style', 'width: 600px; height: 600px;')

// row input listener
rowInput.addEventListener('input', function() {
  // function call
  removeOldCells();
  // grab row value
  cellRow = rowInput.value;
  // function call
  setBoard();
})
// column input listener
columnInput.addEventListener('input', function() {
  // function call
  removeOldCells();
  // grab column value
  cellColumn = columnInput.value;
  // function call
  setBoard();
})

function setBoard() {
  // style the gris to accept all cells
  board.style.gridTemplateRows = `repeat(${cellRow}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${cellColumn}, 1fr)`;

  // loop through the square of numberOfCell 
  for (let i = 0; i < cellRow * cellColumn; i++) {
    // create the cell
    cells = document.createElement('div');
    // add the class of .cell
    cells.classList.add('cell');
    // add the id cell-#
    cells.id = `cell-${i + 1}`;
    // add the cell to the board
    board.appendChild(cells);
  }
}

function removeOldCells() {
  // loop through board element
  while (board.firstChild) {
    // remove the lastChild until no more child
    board.removeChild(board.lastChild);
  }
}

// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
// Option 2A