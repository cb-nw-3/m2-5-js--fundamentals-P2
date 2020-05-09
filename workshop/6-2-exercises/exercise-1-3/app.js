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

function reset() {
for(let i = 1; i < 5; i++) {
    let x = document.getElementById(`btn-${i}`);
    x.style.background = 'gold';
    x.style.opacity = '100';
    
    
        if (i === 4 && (x.classList.length > 0)) {
            x.classList.remove('jitters');
        }
    }
}

const toggleColor = (i, color) => {
    const btnElem = document.getElementById(i);
    const currentColor = btnElem.style.background;
    btnElem.style.background = currentColor === 'gold' ? color : 'gold';
}

function click(x) {
    const btnId = x.target.id;
    const btnElem = document.getElementById(btnId);
    switch (btnId) {
        case 'btn-1':
            btnElem.style.opacity = btnElem.style.opacity === '100' ? '0' : '100';
            break;
        case 'btn-2':
            toggleColor(btnId, 'crimson');
            break;
        case 'btn-3':
            toggleColor(btnId, 'lightblue');
            break;
        case 'btn-4':
            btnElem.classList.toggle('jitters');
            break;
        case 'reset':
            reset();
            break;
        default:
            break;
    }
}

btnList.addEventListener('click', click);
reset();

