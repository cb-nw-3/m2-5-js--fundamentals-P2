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

let myButtons = document.querySelector("#btn-list");
let states = {
  //at initial load
  btn1: false,
  btn2: false,
  btn3: false,
  btn4: false,
};
function clickEffects(event) {
  let { target } = event; //same as let target = event.target
  let btnId = target.id; //target is dom node for button I click on
  switch (btnId) {
    case "btn-1":
      if (states.btn1) {
        target.style.opacity = 1;
      } else {
        target.style.opacity = 0;
      }
      states.btn1 = !states.btn1; //change to opposite
      break;

    case "btn-2": //states will be false so will start with else and will toggle after
      if (states.btn2) {
        target.style.background = "gold";
      } else {
        target.style.background = "crimson";
      }
      states.btn2 = !states.btn2;
      break;

    case "btn-3":
      if (states.btn3) {
        target.style.background = "gold";
      } else {
        target.style.background = "lightblue";
      }
      states.btn3 = !states.btn3;
      break;

    case "btn-4":
      if (states.btn4) {
        target.style.background = "gold";
      } else {
        target.classList.add("jitters");
      }
      states.btn4 = !states.btn4;
      break;
    default:
      break;
  }
}

myButtons.addEventListener("click", clickEffects);
