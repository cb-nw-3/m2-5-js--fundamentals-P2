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

// select buttons
let btnOne = document.querySelector('#btn-1');
let btnTwo = document.querySelector('#btn-2');
let btnThree = document.querySelector('#btn-3');
let btnFour = document.querySelector('#btn-4');

// create an array for all the buttons
let btnId = [btnOne, btnTwo, btnThree, btnFour]

// create a loop to combine all actions into one function
btnId.forEach(element => {

    element.addEventListener('click', function () {

        switch (element.id) {
            case btnOne.id:
                element.style.opacity = 0;
                break;
            case btnTwo.id:
                element.style.backgroundColor = 'crimson';
                break;
            case btnThree.id:
                element.style.backgroundColor = 'lightblue';
                break;
            case btnFour.id:
                element.classList.add('jitters');
                break;
            default:
                break;
        }
    })
})