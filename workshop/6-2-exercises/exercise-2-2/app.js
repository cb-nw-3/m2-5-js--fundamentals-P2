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

let board = document.getElementById('board');
let rowsInput = document.getElementById('rows-input');
let columnsInput = document.getElementById('columns-input');

let BoardSize = 600;
let ROWS = 20;
let COLUMNS = 20;

board.style.height = board.style.width = `${BoardSize}px`;