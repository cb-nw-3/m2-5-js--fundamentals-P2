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
const board = document.querySelector('#board')
let rowInput = document.querySelector('#rows-input')
let columnsInput =document.querySelector('#columns-input');
let rowNumber;
let columnNumber;

board.style.width = '600px';
board.style.height = '600px';


rowInput.addEventListener('blur', getValueRow)

function getValueRow(event){
    rowNumber = event.target.value;
    createGrid(rowNumber,columnNumber)
    removeEventListener('blur', getValueRow);
}

columnsInput.addEventListener('blur',getValueColumn)

function getValueColumn (event){
    columnNumber = event.target.value;
    createGrid(rowNumber,columnNumber)
    removeEventListener('blur', getValueColumn);
}


function createGrid (num1, num2){
    if(num1 > 0 && num2 > 0){
        console.log('you are inside')
        board.style.gridTemplateRows = `repeat(${num1}, 1fr)`
        board.style.gridTemplateColumns = `repeat(${num2},1fr)`

        for(i= 0; i < num1*num2; i++){
            let newCell = document.createElement('div')
            newCell.classList.add('cell')
            newCell.id = `cell-${i+1}`
            board.appendChild(newCell)
        }
    }
}