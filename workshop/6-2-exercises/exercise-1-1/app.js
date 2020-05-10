// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

// select all buttons
let firstBtn = document.querySelector('#btn-1');
let secondBtn = document.querySelector('#btn-2');
let thirdBtn = document.querySelector('#btn-3');
let fourthBtn = document.querySelector('#btn-4');

// place buttons in an array
let btnArray = [firstBtn, secondBtn, thirdBtn, fourthBtn];
// loop through buttons
btnArray.forEach(element => {
  // add event to each button depending on case
  element.addEventListener('click', function() {
    switch (this) {
      case firstBtn:
        this.style.visibility = 'hidden';
        break;
      case secondBtn:
        if (this.style.backgroundColor !== 'crimson') {
          this.style.backgroundColor = 'crimson';
        } else if (this.style.backgroundColor === 'crimson') {
          this.style.backgroundColor = 'gold';
        }
        break;
      case thirdBtn:
        this.style.backgroundColor = 'lightblue';
        break;
      case fourthBtn:
        fourthBtn.classList.add('jitters');
        break;
    }
  })
});

// https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line