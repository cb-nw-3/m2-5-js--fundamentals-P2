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

let board = document.querySelector("#board");
board.style.width = "600px";
board.style.height = "600px";

function generateBoard(x, y) {
    document.querySelector("#board").innerHTML = "";

    board.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${y}, 1fr)`;

    for (let i = 0; i < x * y; i++) {
        let cell = document.createElement("span");
        cell.setAttribute("id", "cell-" + i);
        cell.classList.add("cell");
        board.appendChild(cell);
    }
}


document.querySelector('#rows-input').addEventListener("blur", function () {
    generateBoard(document.querySelector('#rows-input').value, document.querySelector('#columns-input').value);
});

document.querySelector('#columns-input').addEventListener("blur", function () {
    generateBoard(document.querySelector('#rows-input').value, document.querySelector('#columns-input').value);
});