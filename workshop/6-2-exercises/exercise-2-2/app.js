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

const container = document.querySelector("#board");
container.style.width = "600px";
container.style.height = "600px";

const rows = document.querySelector("#rows-input");
const columns = document.querySelector("#columns-input");

let numberOfRows;
let numberOfColumns;

rows.addEventListener("keypress", function () {
  numberOfRows = rows.value;
  console.log(numberOfRows);
  container.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;
});

columns.addEventListener("keypress", function () {
  numberOfColumns = columns.value;
  console.log(numberOfRows);
  container.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
  for (let i = 0; i < numberOfRows * numberOfColumns; i++) {
    console.log("in loop");
    let cell = document.createElement("div");
    cell.id = `cell-${i + 1}`;
    cell.classList.add("cell");
    container.appendChild(cell);
  }
});
