// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

let buttons = document.querySelector('#btn-list');

function clicked (item) {
    let buttonId = item.target.id;
    let buttonClicked = document.getElementById(buttonId);
    
    switch (buttonId) {
        case 'btn-1':
            buttonClicked.style.visibility = 'hidden';
            break;
        case 'btn-2':
            buttonClicked.style.background = 'crimson';
            break;
        case 'btn-3':
            buttonClicked.style.background = 'lightblue';
            break;
        case 'btn-4':
            buttonClicked.classList.add('jitters');
            break;
    }
}

buttons.addEventListener('click', clicked);