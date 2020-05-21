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

let board = document.querySelector("#board");
let rowsInput = document.querySelector("#rows-input");
let columnsInput = document.querySelector("#columns-input");

board.style.height = "600px";
board.style.width = "600px";

function createBoard(rows, columns) {
  board.innerHTML = "";
  if (rows > 0 && columns > 0) {
    board.style.gridTemplateRows = `repeat(${rows},1fr)`;
    board.style.gridTemplateColumns = `repeat(${columns},1fr)`;

    for (i = 0; i < rows * columns; i++) {
      let cell = document.createElement("div");
      board.appendChild(cell);

      cell.classList.add("cell");
      cell.id = `cell-${i + 1}`;
    }
  }
}

rowsInput.addEventListener("blur", function () {
  createBoard(rowsInput.value, columnsInput.value);
});

columnsInput.addEventListener("blur", function () {
  createBoard(rowsInput.value, columnsInput.value);
});
