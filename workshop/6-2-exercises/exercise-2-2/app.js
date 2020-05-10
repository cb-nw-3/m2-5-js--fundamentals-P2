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

let boardSize = document.getElementById("board");
boardSize.style.height = "600px";
boardSize.style.width = "600px";

let creatButton = document.getElementById("creator");
creatButton.addEventListener("click", function () {
  let formForUserRows = document.getElementById("rows-input").value;
  let formForUserColumns = document.getElementById("columns-input").value;
  boardSize.style.gridTemplateRows = "repeat(" + formForUserRows + ",auto)";
  boardSize.style.gridTemplateColumns =
    "repeat(" + formForUserColumns + ",auto)";
  for (let index = 0; index < formForUserRows * formForUserColumns; index++) {
    const myCells = document.createElement("div");
    myCells.classList.add("cell");
    myCells.setAttribute("id", "cell-" + index);
    boardSize.appendChild(myCells);
  }
});
