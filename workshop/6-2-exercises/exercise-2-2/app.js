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

const board = document.getElementById('board');
const rowsInput = document.getElementById('rows-input');
const columnsInput = document.getElementById('columns-input');
// This selects the board and the user's input

const boardSize = 600;
let rows = 0;
let columns = 0;
// This creates variable 'rows' and 'columns'.

board.style.height = board.style.width = `${boardSize}px`;

renderBoard = () => {
  if (rows > 0 && columns > 0) {
    board.innerHTML = '';
    // This remove the HTML orevious entry, as it will not erase the previous inputs
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    for (let cellNum = 0; cellNum < rows * columns; cellNum++) {
      const cell = document.createElement('div');
      cell.id = `cell-${cellNum}`;
      cell.classList.add('cell');
      board.appendChild(cell);
    }
    // From exercise 1
  }
};
// This will remove every element from the previous input and set the new one.

handleRows = (e) => {
  rows = e.target.value;
  console.log(rows);
  // This will get the input value entered by the user. It gives the argument for function in line 29
  renderBoard();
};

handleColumns = (e) => {
  columns = e.target.value;
  console.log(columns);
  // This will get the input value entered by the user. It gives the argument for function in line 29
  renderBoard();
};

rowsInput.addEventListener('blur', handleRows);
columnsInput.addEventListener('blur', handleColumns);

// This add the event listener to the page, in this case is the input from the user.
// Blur function is the inverse of focus, once you leave, it will execute the input number.
