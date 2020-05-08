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
let board = document.getElementById("board");
let rowsInput = document.getElementById("rows-input");
let columnsInput = document.getElementById("columns-input");

board.style.width = "600px";
board.style.height = "600px";

let rows, columns;

function generateBoard() {
  if (rows > 0 && columns > 0) {
    board.innerHTML = "";

    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    for (let i = 0; i < rows * columns; i++) {
      const cell = document.createElement("div");
      cell.id = `cell-${i}`;
      cell.classList.add("cell");
      board.appendChild(cell);
    }
  }
}

function makeRows(event) {
  rows = event.target.value;
  generateBoard();
}

function makeColumns(event) {
  columns = event.target.value;
  generateBoard();
}

rowsInput.addEventListener("blur", makeRows);
columnsInput.addEventListener("blur", makeColumns);
