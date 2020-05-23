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
board.style.height = "600px";
board.style.width = "600px";
board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;
board.style.gridTemplateRows = "repeat(10, auto)";

let COLUMNS;
let ROWS;

function addCell(cellNum) {
  let cell = document.createElement("div"); // creates a div
  cell.id = `cell-${cellNum}`; //gives that div an id of whatever num cell is passed
  cell.classList.add("cell"); // add "cell" class to the classlist of that div//WHY??
  return cell;
}

function renderCells() {
  if (COLUMNS <= 0 || ROWS <= 0) return; //else all below will execute
  let board = document.getElementById("board");
  board.innerHTML = ""; // will delete all children of the board
  for (let cellNum = 0; cellNum < ROWS * COLUMNS; cellNum++) {
    board.appendChild(addCell(cellNum));
  }

  board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;
}

function setColumns(e) {
  COLUMNS = e.target.value;
  renderCells();
}

function setRows(e) {
  //function gets the event passed to it and it gets called below by event listener. When event listener calls it also passes the event
  //
  ROWS = e.target.value; //value of th dom element (columns input)that triggers event
  renderCells();
}

const rowsInput = document.getElementById("rows-input");
const columnsInput = document.getElementById("columns-input");

rowsInput.addEventListener("blur", setRows);
columnsInput.addEventListener("blur", setColumns);
