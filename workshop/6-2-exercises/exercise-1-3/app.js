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

const btnList = document.querySelector('#btn-list');

const handleReset = () => {
    for (let id = 1; id < 5; id++) {
        const initButton = document.getElementById(`btn-${id}`);
    
        initButton.style.opacity = '100';
        initButton.style.backgroundColor = 'gold';

        if (id === 4 && (initButton.classList.length > 0)) {
            initButton.classList.remove('jitters');
        }
    }
}

handleReset();

const toggleColor = (id, color) => {
    const btnElement = document.getElementById(id);
    const currentColor = btnElement.style.backgroundColor;

    btnElement.style.backgroundColor = currentColor === 'gold' ? color : 'gold';
}

const handleClick = (e) => {
    const btnId = e.target.id;
    const btnElement = document.getElementById(btnId);
    switch (btnId) {
        case 'btn-1':
            btnElement.style.opacity = btnElement.style.opacity === '100' ? '0' : '100';
            break;
        case 'btn-2':
            toggleColor(btnId, 'crimson');
            break;
        case 'btn-3':
            toggleColor(btnId, 'lightblue');
            break;
        case 'btn-4':
            btnElement.classList.toggle('jitters');
            break;
        case 'reset':
            handleReset();
            break;
        default:
            break;
    }
}


btnList.addEventListener('click', handleClick);