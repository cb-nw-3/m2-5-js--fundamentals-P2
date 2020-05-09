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
board.style.width = "600px";
board.style.height = "600px";
let numOfRows = 0;
let numofCols = 0;

// for (let i = 0; i < 100; i++) {
//   let newCell = document.createElement("div");
//   newCell.setAttribute("class", "cell");
//   newCell.setAttribute("id", "cell-" + (i + 1));
//   board.appendChild(newCell);
// }

let rowInput = document.querySelector("#rows-input");
rowInput.addEventListener("blur", (event) => {
  if (isNaN(event.target.value)) numOfRows = 0;

  if (event.target.value <= 0) {
    numOfRows = 0;
  } else if (event.target.value >= 100) {
    numOfRows = 100;
  } else {
    numOfRows = event.target.value;
  }

  buildGrid();
});

let colInput = document.querySelector("#columns-input");
colInput.addEventListener("blur", (event) => {
  if (isNaN(event.target.value)) numofCols = 0;

  if (event.target.value <= 0) {
    numofCols = 0;
  } else if (event.target.value >= 100) {
    numofCols = 100;
  } else {
    numofCols = event.target.value;
  }

  buildGrid();
});

function buildGrid() {
  if (numOfRows === 0 || numofCols === 0) return;

  let cellHeight = Math.floor(600 / numOfRows) - 2;
  let rowHeight = [];
  for (let i = 0; i < numOfRows; i++) {
    rowHeight.push(cellHeight + "px");
  }
  let rowStyle = rowHeight.join(" ");

  let cellWidth = Math.floor(600 / numofCols) - 2;
  let colWidth = [];
  for (let i = 0; i < numofCols; i++) {
    colWidth.push(cellWidth + "px");
  }
  let colStyle = colWidth.join(" ");
  board.style.gridTemplateColumns = colStyle;
  board.style.gridTemplateRows = rowStyle;

  let totalCells = numOfRows * numofCols;
  for (let i = 0; i < totalCells; i++) {
    let newCell = document.createElement("div");
    newCell.setAttribute("class", "cell");
    newCell.setAttribute("id", "cell-" + (i + 1));
    board.appendChild(newCell);
  }
}
