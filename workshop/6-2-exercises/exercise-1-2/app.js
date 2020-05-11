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

const btnList = document.querySelector('#btn-list');

for (let id = 1; id < 5; id++) {
    // target the dom element
    const initButton = document.getElementById(`btn-${id}`);

    // explicitely set the opacity and backgroundColor.
    initButton.style.opacity = '100';
    initButton.style.backgroundColor = 'gold';
}

const toggleColor = (id, color) => {
    const btnElement = document.getElementById(id);
    const currentColor = btnElement.style.backgroundColor;
    if(currentColor === 'gold') {
        btnElement.style.backgroundColor = `${color}`;
      } else {
        btnElement.style.backgroundColor = 'gold';
      }
}

const handleClick = (event) => {
    const btnId = event.target.id;
    const btnElement = document.getElementById(btnId);
    switch (btnId) {
        case 'btn-1':
            if(btnElement.style.opacity == 100) {
                btnElement.style.opacity = 0;
              } else {
                btnElement.style.opacity = 100;
              }
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
        default:
            break;
    }
}

btnList.addEventListener('click', handleClick);