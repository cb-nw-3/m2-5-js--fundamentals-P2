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

// select buttons
let firstButton = document.querySelector('#btn-1');
let secondButton = document.querySelector('#btn-2');
let thirdButton = document.querySelector('#btn-3');
let fourthButton = document.querySelector('#btn-4');

// set the attributes
firstButton.setAttribute('style', 'opacity: 1; background: gold;');
secondButton.setAttribute('style', 'background: gold;');
thirdButton.setAttribute('style', 'background: gold;');
fourthButton.setAttribute('style', 'background: gold;');

// put da buttons in array
let buttonsArray = [firstButton, secondButton, thirdButton, fourthButton];

// loop through array
buttonsArray.forEach(elem => {
  // add click event
  elem.addEventListener('click', function() {
    switch (this) {
      // first case
      case firstButton:
        // if visible change opcatiy to 0
        if (firstButton.style.opacity === '1') {
          firstButton.style.opacity = '0';
        // if invisible change opacity to 1
        } else if (firstButton.style.opacity === '0') {
          firstButton.style.opacity = '1';
        }
        break;
      // second case
      case secondButton:
        // if gold change to crimson
        if (secondButton.style.backgroundColor === 'gold') {
          secondButton.style.backgroundColor = 'crimson';
        // if crimson change to gold
        } else if (secondButton.style.backgroundColor === 'crimson') {
          secondButton.style.backgroundColor = 'gold';
        }
        break;
      // third case
      case thirdButton:
        // if gold change to lightblue
        if (thirdButton.style.backgroundColor === 'gold') {
          thirdButton.style.backgroundColor = 'lightblue';
        // if light blue change to gold
        } else if (thirdButton.style.backgroundColor === 'lightblue') {
          thirdButton.style.backgroundColor = 'gold';
        }
        break;
      // fourth case
      case fourthButton:
        // toggle on and off the animation
        fourthButton.classList.toggle('jitters');
        break;
    }
  })
})
