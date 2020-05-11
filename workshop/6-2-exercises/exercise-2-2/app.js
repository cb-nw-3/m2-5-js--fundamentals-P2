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

let board = document.querySelector('#board');
    board.style.height = board.style.width = '600px';

let rows = document.querySelector('#rows-input');
let columns = document.querySelector('#columns-input');

function creatingBoard (){
    if (rows > 0 && columns > 0) {
        board.innerHTML = '';

        board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

        for (let cells = 0; cells < rows * columns; cells++) {

            let eachCell = document.createElement('div');
                eachCell.id = `cell-${cells}`;
                eachCell.classList.add('cell');

                board.appendChild(eachCell);
        }
    }   
}

let addingRows = (item) => {
    rows = item.target.value;
    creatingBoard();
}

let addingColumns = (item) => {
    columns = item.target.value;
    creatingBoard();
}

rows.addEventListener('blur', addingRows);
columns.addEventListener('blur', addingColumns); 