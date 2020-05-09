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

//set number of rows and columns
let ROWS = 0;
let COLUMNS = 0;


const boardElement = document.getElementById('board');

//set board size
boardElement.style.height = '600px';
boardElement.style.width = '600px';


//add grid cells
//boardElement.style.gridTemplateRows = `repeat(${ROWS},auto)`;


//add elements into grid
function addCells() {
  //need to delete previous elements
  boardElement.innerHTML = '';
  
  for(let i = 0; i < ROWS * COLUMNS; i++ ) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id', `cell-${i+1}`);
    boardElement.appendChild(cell);
  }
}


const inputRows = document.getElementById('rows-input');
const inputColumns = document.getElementById('columns-input');

inputRows.addEventListener('input',function addRows(e) {
  console.log(e.target.value);
  ROWS = e.target.value;
  boardElement.style.gridTemplateRows = `repeat(${ROWS},auto)`;
  addCells();
  
  //remove inputrows
  // inputRows.removeEventListener('input',addRows);
})

inputColumns.addEventListener('input',function addColumns(e) {
  console.log(e.target.value);
  COLUMNS = e.target.value;
  boardElement.style.gridTemplateColumns = `repeat(${COLUMNS},auto)`;
  addCells();

  // inputColumns.removeEventListener('input',addColumns);
})



//test
// let getInputs = setInterval(() => {
//   if(inputRows.value == '' || inputColumns.value == '') {
//     console.log('still empty');
//   } else {
//     console.log(inputRows.value);
//     console.log(inputColumns.value);
//     console.log('I have all the numbers I need!');
//     clearInterval(getInputs);
//   }
// }, 1000);
