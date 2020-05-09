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

const boardSize = 600;
let columns = 10;
let rows = 10;

const boardElement = document.querySelector("#board");
const rowsInput = document.querySelector("#rows-input");
const columnsInput = document.querySelector("#columns-input");

rowsInput.addEventListener("blur", buildBoard);
columnsInput.addEventListener("blur", buildBoard);

buildBoard();

function buildBoard() {
  //only take non-default value if a value has been entered
  if (columnsInput.value) {
    columns = Number(columnsInput.value);
  }
  if (rowsInput.value) {
    rows = Number(rowsInput.value);
  }

  //clear board
  let allCells = document.querySelectorAll(".cell");
  allCells.forEach(function (item) {
    boardElement.removeChild(item);
  });
  //setup board
  boardElement.setAttribute(
    "style",
    `width: ${boardSize}px; 
    height: ${boardSize}px;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);`
  );
  //build cells
  for (let i = 0; i < rows * columns; i++) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.id = `cell-${i}`;
    boardElement.appendChild(newCell);
  }
}
