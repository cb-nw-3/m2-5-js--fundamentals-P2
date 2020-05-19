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

// define numbers for sizes
let boardSize = 600;
let rows = 10;
let columns = 10;

//setting up the board
let board = document.getElementById('board');
board.style.height = board.style.width = `${boardSize}px`;

// creating the rows and columns
function makeRowsNColumns(rows, columns) {
    board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    // have cells repeat to make the grid
    for (x = 0; x < (rows * columns); x++) {
        let cell = document.createElement("div");
        // add attributes to cells
        cell.id = `cell-${x}`;
        cell.className = "cell";
        // show numbers on cells
        cell.innerText = (x + 1);
        cell.style.textAlign = "center";
        cell.style.padding = '20px';
        // put cell into board div
        board.appendChild(cell);
    };
};

// run function to create the grid
makeRowsNColumns(10, 10);