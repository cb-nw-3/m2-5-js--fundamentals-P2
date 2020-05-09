// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

let buttons = document.querySelector('#btn-list');

for (let id = 1; id < 5; id++) {
    let buttonElements = document.getElementById(`btn-${id}`);
        buttonElements.style.opacity = '100';
        buttonElements.style.background = 'gold';
}

let clicked = (item) => {
    let buttonId = item.target.id;
    let buttonSelected = document.getElementById(buttonId);

    switch (buttonId) {
        case 'btn-1':
            buttonSelected.style.opacity = buttonSelected.style.opacity === '100' ? '0' : '100';
            break;
        case 'btn-2':
            buttonSelected.style.background = buttonSelected.style.background === 'gold' ? 'crimson' : 'gold';
            break;
        case 'btn-3':
            buttonSelected.style.background = buttonSelected.style.background === 'gold' ? 'lightblue' : 'gold';
            break;
        case 'btn-4':
            buttonSelected.classList.toggle('jitters');
            break;
    }
}

buttons.addEventListener('click', clicked);


