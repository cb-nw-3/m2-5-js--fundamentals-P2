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

// select all buttons
let resetButton = document.querySelector('#reset');
let firstButton = document.querySelector('#btn-1');
let secondButton = document.querySelector('#btn-2');
let thirdButton = document.querySelector('#btn-3');
let fourthButton = document.querySelector('#btn-4');

// initialize all buttons
firstButton.setAttribute('style', 'opacity: 1;background: gold;');
secondButton.setAttribute('style', 'background: gold;');
thirdButton.setAttribute('style', 'background: gold;');
fourthButton.setAttribute('style', 'background: gold;');
resetButton.setAttribute('style', 'background: gold;');

// put buttons in da array
let btnArr = [firstButton, secondButton, thirdButton, fourthButton, resetButton];

// loop through array
btnArr.forEach(elem => {
  // add click event to items
  elem.addEventListener('click', function() {
    switch (this) {
      // first button case
      case firstButton:
        // make button invisible if visible
        if (firstButton.style.opacity === '1') {
          firstButton.style.opacity = '0';
        // make button visible if invisible
        } else if (firstButton.style.opacity === '0') {
          firstButton.style.opacity = '1';
        }
        break;
      // second button case
      case secondButton:
        // make button crimson if gold
        if (secondButton.style.background === 'gold') {
          secondButton.style.background = 'crimson';
        // make button gold if crimson
        } else if (secondButton.style.background === 'crimson') {
          secondButton.style.background = 'gold';
        }
        break;
      // third button case
      case thirdButton:
        // make button lightblue if gold
        if (thirdButton.style.background === 'gold') {
          thirdButton.style.background = 'lightblue';
        // make button gold if lightblue
        } else if (thirdButton.style.background === 'lightblue') {
          thirdButton.style.background = 'gold';
        }
        break;
      // fourth button case
      case fourthButton:
        // remove and add animation class
        fourthButton.classList.toggle('jitters');
        break;
      // reset button case
      case resetButton:
        // reset all initial styles
        firstButton.style.opacity = '1';
        secondButton.style.background = 'gold';
        thirdButton.style.background = 'gold';
        fourthButton.classList.remove('jitters');
        break;
    }
  })
})
