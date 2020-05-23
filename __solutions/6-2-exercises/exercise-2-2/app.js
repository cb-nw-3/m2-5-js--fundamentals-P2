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

const board = document.getElementById("board");
const rowsInput = document.getElementById("rows-input");
const columnsInput = document.getElementById("columns-input");

const BOARD_SIZE = 600;
let ROWS, COLUMNS; ////????

board.style.height = board.style.width = `${BOARD_SIZE}px`;

renderBoard = () => {
  if (ROWS > 0 && COLUMNS > 0) {
    // *Need to remove the cells from the previous rendering...
    board.innerHTML = "";

    board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;

    for (let cellNum = 0; cellNum < ROWS * COLUMNS; cellNum++) {
      const cell = document.createElement("div");
      cell.id = `cell-${cellNum}`;
      cell.classList.add("cell");
      board.appendChild(cell);
    }
  }
};

handleRows = (e) => {
  ROWS = e.target.value;
  renderBoard();
};

handleColumns = (e) => {
  console.log(e); //target is a property of the (blur) event that holds a ref. to dom element( input) that trigers event (blur)
  COLUMNS = e.target.value; // that event is targeting that dom node
  renderBoard();
};

rowsInput.addEventListener("blur", handleRows);
columnsInput.addEventListener("blur", handleColumns);
