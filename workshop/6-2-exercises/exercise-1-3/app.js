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

let reset = document.querySelector("#reset");
reset.style.background = "purple";

//when I click on above below should change
function resetEffects(event) {
  // reset btn 1
  let btn1 = document.getElementById("btn-1");
  btn1.style.opacity = 1;
  states.btn1 = false;
  // reset btn 2
  let btn2 = document.getElementById("btn-2");
  btn2.style.background = "gold";
  states.btn2 = false;
  // reset btn 3
  let btn3 = document.getElementById("btn-3");
  btn3.style.background = "gold";
  states.btn3 = false;
  //reset btn 4
  let btn4 = document.getElementById("btn-4");
  btn4.style.background = "gold";
  states.btn4 = false;
}

reset.addEventListener("click", resetEffects);

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
        //states btn1 is false here
        target.style.opacity = 1; //when false this is state
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
