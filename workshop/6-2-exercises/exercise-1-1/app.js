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

const btnList = document.querySelector('.panel');
// Can take UL element

const handleClick = function (e) {
  // e is the variable in the function, in this case is the event
  const btnId = e.target.id;
  // This returns the id that was clicked
  console.log(btnId);
  const btnElement = document.getElementById(btnId);
  // Select HTML element containing ID, for this case is the button
  console.log(btnElement);

  if (btnId === 'btn-1') {
    btnElement.style.opacity = 0;
  } else if (btnId === 'btn-2') {
    btnElement.style.backgroundColor = 'crimson';
  } else if (btnId === 'btn-3') {
    btnElement.style.backgroundColor = 'lightblue';

    // This adds CSS property on the elements chosen
  } else if (btnId === 'btn-4') {
    btnElement.classList.add('jitters');
    // This adds a class to the Element chosen,
    // animation was already programmed in the CSS document
  }
};

btnList.addEventListener('click', handleClick);
