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

const buttons = document.getElementById('btn-list');
// console.log(buttons);

const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
  console.log(button);
  button.style.opacity = '100';
  button.style.backgroundColor = 'gold';
})

function toggleColor(button, color) {
  const btn = document.getElementById(button);
  const colorNow = btn.style.backgroundColor;
  if(colorNow == 'gold') {
    btn.style.backgroundColor = `${color}`;
  } else {
    btn.style.backgroundColor = 'gold';
  }
}

buttons.addEventListener('click', function(event) {
  let btnId = event.target.id;
  // console.log(btn);
  let btn = document.getElementById(btnId);
  switch(btnId){
    case 'btn-1':
      if(btn.style.opacity == 100) {
        btn.style.opacity = 0;
      } else {
        btn.style.opacity = 100;
      }
      break;
    case 'btn-2':
      toggleColor(btnId,'crimson');
      break;
    case 'btn-3':
      toggleColor(btnId,'lightblue');
      break;
    case 'btn-4':
      btn.classList.toggle('jitters');
      break;
  }
})

