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

let board = (function () {
  const boardElement = document.querySelector("#board");
  boardElement.style.width = "600px";
  boardElement.style.height = "600px";
  boardElement.setAttribute("display", "flex");
  boardElement.setAttribute("flex-direction", "column");

  let createCells = (rows, columns) => {
    for (let i = 0; i < rows; i++) {
      let row = document.createElement("div");
      row.style.display = "flex";
      for (let j = 0; j < columns; j++) {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.style.flex = "1";
        div.id = `${i}-${j}`;
        row.appendChild(div);
      }
      boardElement.appendChild(row);
    }
  };
  let reset = () => {
    while (boardElement.querySelector("div") !== null) {
      let content = boardElement.querySelector("div");
      boardElement.removeChild(content);
    }
  };
  return { createCells, reset };
})();

const rowInput = document.querySelector("#rows-input");
const colInput = document.querySelector("#columns-input");

rowInput.addEventListener("blur", eventHandler);
colInput.addEventListener("blur", eventHandler);
let rowWanted;
let colWanted;

function eventHandler(e) {
  let input = e.currentTarget.id;
  switch (input) {
    case "rows-input":
      board.reset();
      rowWanted = e.currentTarget.value;
      break;
    case "columns-input":
      board.reset();
      colWanted = e.currentTarget.value;
      break;
  }
  if (rowWanted && colWanted) {
    board.createCells(rowWanted, colWanted);
  }
}
