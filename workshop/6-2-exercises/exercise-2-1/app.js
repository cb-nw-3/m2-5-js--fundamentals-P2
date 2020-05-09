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

let rows = 10;
let columns = 10;

let board = document.querySelector('#board');
    board.style.height = board.style.width = '600px';

    board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

for (let cells = 0; cells < 100; cells++) {
    let eachCell = document.createElement('div');
        eachCell.id = `cell-${cells}`;
        eachCell.classList.add('cell');
        
        board.appendChild(eachCell);
}

