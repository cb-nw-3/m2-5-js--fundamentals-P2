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
    // This toggles instead of adding a new style "opacity".
  } else if (btnId === 'btn-2') {
    console.log(btnId);
    toggleColor(btnId, 'crimson');
    // Instead of changing the CSS propery we use the function "toggleColor"
    // first argument is the ID, second is the second color
  } else if (btnId === 'btn-3') {
    toggleColor(btnId, 'lightblue');
    // Same as in line # 33
  } else if (btnId === 'btn-4') {
    btnElement.classList.toggle('jitters');
    // Instead of "add", we use method "toggle".
  }
};

for (let id = 1; id < 5; id++) {
  const initButton = document.getElementById(`btn-${id}`);
  // This selected the button ID
  initButton.style.opacity = '100';
  initButton.style.backgroundColor = 'gold';
  // This sets the default opacity and color to 'gold'
}
// This "for" loop will set the default color for the button.

const toggleColor = function (id, color) {
  const btnElement = document.getElementById(id);
  // This selects button ID
  const currentColor = btnElement.style.backgroundColor;
  // This gives the current color
  if (currentColor === 'gold') {
    btnElement.style.backgroundColor = color;
  } else {
    btnElement.style.backgroundColor = 'gold';
  }
  //   if Color is 'gold' return the "color" from the second argument of the function,
};
// This is the toggle function that is used in line 32 and 36

btnList.addEventListener('click', handleClick);
