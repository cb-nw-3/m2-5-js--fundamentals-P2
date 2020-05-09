// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.

let buttons = document.querySelector('#btn-list');

function resetAll () {
    for (let id = 1; id < 5; id++) {
        let buttonElements = document.getElementById(`btn-${id}`);
            buttonElements.style.opacity = '100';
            buttonElements.style.background = 'gold';

        if (id === 4 && (buttonElements.classList == 'jitters')) {
            buttonElements.classList.remove('jitters');
        }
    }
}
resetAll();

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
        case 'reset':
            resetAll();
            break;
    }
}

buttons.addEventListener('click', clicked);

