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


const btnList = document.getElementById('btn-list');

const handleReset = () => {

  for (let id = 1; id < 5; id++) {
    const initialButton = document.getElementById(`btn-${id}`);

    // Set initial opacity
    initialButton.style.opacity = '100';
    
    // Set initial background color
    initialButton.style.backgroundColor = 'gold';

    // Check the length of the classList to remove the 'jitters' class 
    if (id === 4 && (initialButton.classList.length > 0)) {
      initialButton.classList.remove('jitters');
    }
  }
}

// Reset buttons to initial state
handleReset();


// Create a toggleColor function
const toggleColor = (id, color) => {
  const btnEl = document.getElementById(id);
  const currentColor = btnEl.style.backgroundColor;

  btnEl.style.backgroundColor = currentColor === 'gold' ? color : 'gold';
}

// Create handle click function
const handleClick = (item) => {
  const btnId = item.target.id;
  const btnEl = document.getElementById(btnId);

  switch (btnId) {
    case 'btn-1':
      btnEl.style.opacity = btnEl.style.opacity === '100' ? '0' : '100';
      break;
    case 'btn-2':
      toggleColor(btnId, 'crimson');
      break;
    case 'btn-3':
      toggleColor(btnId, 'lightblue');
      break;
    case 'btn-4':
      btnEl.classList.toggle('jitters');
      break;
    case 'reset':
      handleReset();
    default:
      break;
  }
}

btnList.addEventListener('click', handleClick);