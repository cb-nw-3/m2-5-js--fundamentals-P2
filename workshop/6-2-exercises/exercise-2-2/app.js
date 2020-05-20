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


let boardWidth = 600;
let boardHeight = 600;
let columns;
let rows;
let board = document.getElementById("board");
let columnNumber = document.getElementById("columns-input");
let rowNumber = document.getElementById("rows-input");

board.style.width = `${boardWidth}px`;
board.style.height = `${boardHeight}px`;
// board.style.gridTemplateRows = `repeat(${rows},1fr)`;
// board.style.gridTemplateColumns = `repeat(${columns},1fr)`;

function reset(){
    if( rows !== 0 && columns !== 0){

        board.style.gridTemplateRows = `repeat(${rows},1fr)`;
        board.style.gridTemplateColumns = `repeat(${columns},1fr)`;

        for (let i = 0; i <= (columns * rows) - 1; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `cell-${i}`;
            board.appendChild(cell);
        }
    }
}

function columnsImput(event) {
    columns = event.target.value;
    reset();
}

function rowInput(event) {
    rows = event.target.value;
    reset();
}
columnNumber.addEventListener("blur", columnsImput);
rowNumber.addEventListener("blur", rowInput);















rowsInput.addEventListener('blur', handleRows);
columnsInput.addEventListener('blur', handleColumns);