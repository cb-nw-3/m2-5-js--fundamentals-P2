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

document.getElementById('btn-1').addEventListener('click', disappears);
document.getElementById('btn-2').addEventListener('click', crimson);
document.getElementById('btn-3').addEventListener('click', lightBlue);
document.getElementById('btn-4').addEventListener('click', shaking);


function disappears() {
    document.getElementById('btn-1').style.opacity = 0;
}

function crimson() {
    document.getElementById('btn-2').style.background = 'crimson';
}

function lightBlue() {
    document.getElementById('btn-3').style.background = 'lightblue';
}

function shaking() {
    document.getElementById('btn-4').classList.add('jitters');
}