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

let rowsInput = document.querySelector("#rows-input");
let columnsInput = document.querySelector("#columns-input");
let rows;
let columns;
let board = document.querySelector("#board");
board.style.width = "600px";
board.style.height = "600px";



rowsInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        rows = rowsInput.value;
        columns = columnsInput.value;

        console.log(rows)
        generateBoard();
      // code for enter
    }
});

columnsInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        rows = rowsInput.value;

        columns = columnsInput.value;
        console.log(columns)
        generateBoard();

      // code for enter
    }
});

function generateBoard()
{
    while (board.lastElementChild) {
        board.removeChild(board.lastElementChild);
      }
    
    
    let totalRows = rows;
    let cellsPerRow = columns;
    
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
}


