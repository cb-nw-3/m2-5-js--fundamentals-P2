// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'

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
  return { createCells };
})();

board.createCells(5, 5);
