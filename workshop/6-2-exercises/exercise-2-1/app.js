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

let totalRows = 10;
let cellsPerRow = 10;

let cellcounter = 1;

for (row=0; row<totalRows; row++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.id = 'row',row;
    console.log((600/totalRows)+"px");
    row.style.height = (600/totalRows-3)+"px";
    row.style.width = "596px";
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.justifyContent="space-between"
    // console.log(row);
    for (c=0; c<cellsPerRow; c++)  {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = 'cell-'+cellcounter;
        cell.style.height = (590/totalRows-2)+"px";
        cell.style.width = (590/cellsPerRow-2)+"px";
        row.appendChild(cell);
        cellcounter++;
    }

    board.appendChild(row);

    
}







