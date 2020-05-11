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

console.log(buttons);
buttons.addEventListener('click', buttonResponse);

function buttonResponse(event)
{
    switch (event.target.id)
    {
        case 'btn-1':
            event.target.style.display = "none";
            break;
        case 'btn-2':
            event.target.style.backgroundColor = "crimson";
            break;
        case 'btn-3':
            event.target.style.backgroundColor = "lightblue";
            break;
        case 'btn-4':
            event.target.classList.add('jitters');
            break;
    }
}
