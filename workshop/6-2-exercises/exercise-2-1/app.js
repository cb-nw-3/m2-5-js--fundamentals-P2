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

const board = document.querySelector('#board')

board.style.width = '600px'
board.style.height = '600px'

board.style.gridTemplateColumns = 'repeat(6, 1fr)'

for(i=0; i<36; i++){
    let newCell = document.createElement('div')
    board.appendChild(newCell)

    newCell.classList.add('cell')
    newCell.id = `cell-${i+1}`
}