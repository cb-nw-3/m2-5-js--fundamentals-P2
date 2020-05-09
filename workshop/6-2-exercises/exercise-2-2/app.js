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
const START = document.createElement("button");
const FORM = document.querySelector("form");
const ROWS = document.querySelector("#rows-input");
const COLS = document.querySelector("#columns-input");
START.classList = "startButton";
START.innerHTML = "START";
FORM.appendChild(START);
START.addEventListener("click", drawBoard);

// console.log(ROWS.value, COLS.value);

function drawBoard(e) {
  e.preventDefault();
  // console.log(ROWS.value, COLS.value);
  const BOARD = document.querySelector("#board");
  BOARD.style.width = "600px";
  BOARD.style.height = "600px";
  const TOTALCELLS = ROWS.value * COLS.value;
  //setting rows
  let gridRows = "";
  for (let j = 1; j <= ROWS.value; j++) {
    gridRows = gridRows.concat(`${600 / parseInt(ROWS.value)}px `);
  }
  BOARD.style.gridTemplateRows = gridRows;

  //setting columns
  let gridCols = "";
  for (let j = 1; j <= COLS.value; j++) {
    gridCols = gridCols.concat(`${600 / parseInt(COLS.value)}px `);
  }
  BOARD.style.gridTemplateColumns = gridCols;
  BOARD.style.gridGap = 0;

  for (let i = 1; i <= TOTALCELLS; i++) {
    const CELL = document.createElement("div");
    CELL.id = `cell-${i}`;
    CELL.classList.add("cell");
    CELL.style.width = `${600 / parseInt(COLS.value)}px`;
    CELL.style.height = `${600 / parseInt(ROWS.value)}px`;
    BOARD.appendChild(CELL);
  }
  FORM.removeChild(START);
}
