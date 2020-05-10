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

let listParent = document.querySelector('.buttons')

listParent.addEventListener('click', buttonEffects)

function buttonEffects (event){
    let buttonId = event.target.id;
    let DOMButton = document.querySelector(`#${buttonId}`);
    console.log('identity',buttonId)

    switch(buttonId){
        case 'btn-1':
            DOMButton.style.display = 'none';
            break;
        case 'btn-2':
            DOMButton.style.backgroundColor = 'crimson';
            break;
        case 'btn-3' :
            DOMButton.style.backgroundColor = 'lightblue';
            break;
        case 'btn-4' :
            DOMButton.classList.add('jitters')
            break;
        default:
            console.log('clackyClik');
            break;
    }
    console.log('clickyClik')
};