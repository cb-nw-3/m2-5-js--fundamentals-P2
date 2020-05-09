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

let board = document.querySelector("#board");
board.style.width = "600px";
board.style.height = "600px";

// this should create a grid of 15 by 15 squares.
// it doesn't seem to want to create empty squares.

for (let i = 0; i <= 14; i++) {
    let row = document.createElement("div");
    for (let j = 0; j <= 14; j++) {
        let cell = document.createElement("span");
        cell.style.width = "35px";
        cell.style.height = "35px";
        cell.style.margin = "0 2px"
        cell.style.background = "green";
        cell.style.display = "inline-block";
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", "cell-" + i + j);
        row.appendChild(cell);
    }
    board.appendChild(row);
}