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

// - set the size of the board to a square of 600px;
const boardSize = '600px';

let rows;
let columns;

const board = document.getElementById('board');
const rowsInput = document.getElementById('rows-input');
const columnsInput = document.getElementById('columns-input');

// Set the board with square size
board.style.height = board.style.width = boardSize;


let userCustomBoard = () => {

  if (rows > 0 && columns > 0) {
    board.innerHTML = '';

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
  }
}

userRows = (num) => {
  rows = num.target.value;
  userCustomBoard();
}

userColumns = (num) => {
  columns = num.target.value;
  userCustomBoard();
}

rowsInput.addEventListener('blur', userRows);
columnsInput.addEventListener('blur', userColumns);
