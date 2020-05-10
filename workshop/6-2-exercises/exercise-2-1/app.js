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

/*
1. Mettre le square à 600px avec css style
2. for lopp les colonnes et rangés
3. donner une class au cells
4. donner id au cells
*/

let boardSize = document.getElementById("board");
boardSize.style.height = "600px";
boardSize.style.width = "600px";
boardSize.style.gridTemplateRows = "repeat(8,auto)";
boardSize.style.gridTemplateColumns = "repeat(8,auto)";
for (let index = 0; index < 8 * 8; index++) {
  const myCells = document.createElement("div");
  myCells.classList.add("cell");
  myCells.setAttribute("id", "cell-" + index);
  boardSize.appendChild(myCells);
}
