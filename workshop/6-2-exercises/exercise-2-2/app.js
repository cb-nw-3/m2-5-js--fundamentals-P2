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
let gameBoard = document.querySelector("#board");
gameBoard.setAttribute("style", "height: 600px; width: 600px; display:grid;");
gameBoard.style.gridTemplateColumns = "repeat(" + numOfCol + ", 1fr)";
gameBoard.style.gridTemplateRows = "repeat(" + numOfRows + ", 1fr)";

function setUpBoard(numOfRows, numOfCol) {
  for (let i = 0; i < numOfRows * numOfCol; i++) {
    let tableCell = document.createElement("div");
    tableCell.setAttribute("id", "cell-#" + i);
    tableCell.classList.add("cell");
    gameBoard.append(tableCell);
  }
  rowsValue.value = "";
  columnsValue.value = "";
}

let rowsValue = document.querySelector("#rows-input");
let columnsValue = document.querySelector("#columns-input");

columnsValue.addEventListener("blur", function () {
  if (rowsValue.value === "") {
  } else if (rowsValue.value !== "" && columnsValue.value !== "") {
    setUpBoard(rowsValue.value, columnsValue.value);
  }
});

rowsValue.addEventListener("blur", function () {
  if (columnsValue.value === "") {
  } else if (rowsValue.value !== "" && columnsValue.value !== "") {
    setUpBoard(rowsValue.value, columnsValue.value);
  }
});
