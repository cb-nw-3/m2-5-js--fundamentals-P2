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

const btnList = document.querySelector('.panel');

const handleClick = function (e) {
  const btnId = e.target.id;
  const btnElement = document.getElementById(btnId);

  if (btnId === 'btn-1') {
    console.log(btnId);
    if (btnElement.style.opacity === '100') {
      btnElement.style.opacity = '0';
    } else if (btnElement.style.opacity !== '100') {
      btnElement.style.opacity = '100';
    }
  } else if (btnId === 'btn-2') {
    console.log(btnId);
    toggleColor(btnId, 'crimson');
  } else if (btnId === 'btn-3') {
    toggleColor(btnId, 'lightblue');
  } else if (btnId === 'btn-4') {
    btnElement.classList.toggle('jitters');
  } else if (btnId === 'reset') {
    handleReset();
    // This adds the function 'handleReset()' from line 65 to the listener 'click'
  }
};

for (let id = 1; id < 5; id++) {
  const initButton = document.getElementById(`btn-${id}`);
  initButton.style.opacity = '100';
  initButton.style.backgroundColor = 'gold';
}

const toggleColor = function (id, color) {
  const btnElement = document.getElementById(id);
  const currentColor = btnElement.style.backgroundColor;
  if (currentColor === 'gold') {
    btnElement.style.backgroundColor = color;
  } else {
    btnElement.style.backgroundColor = 'gold';
  }
};

const handleReset = function () {
  for (let id = 1; id < 5; id++) {
    const initButton = document.getElementById(`btn-${id}`);
    // target the dom element, the buttton

    initButton.style.opacity = '100';
    initButton.style.backgroundColor = 'gold';
    //This sets the opacity and backgroundColor back to the default value.
    // need to remove the 'jitters' class if it's there
    if (id === 4) {
      initButton.classList.remove('jitters');
    }
    // Removes the class 'jitters' from button-4.
  }
};
// Does the initializing of the buttons.
handleReset();

btnList.addEventListener('click', handleClick);
