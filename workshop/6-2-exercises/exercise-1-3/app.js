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

const btnArray = document.querySelectorAll("button");

let btn1Toggled = false;
let btn2Toggled = false;
let btn3Toggled = false;
let btn4Toggled = false;

btnArray.forEach(function (item) {
  item.addEventListener("click", buttonEvent);
});

console.log(btnArray[4]);

function buttonEvent() {
  switch (event.target.innerText) {
    case "💨":
      toggleEffect(event.target);
      break;
    case "😠":
      toggleEffect(event.target);
      break;
    case "😭":
      toggleEffect(event.target);
      break;
    case "🥴":
      toggleEffect(event.target);
      break;
    case "Reset":
      resetButtons();
      break;
  }
}

function toggleEffect(item) {
  switch (item.innerText) {
    case "💨":
      if (btn1Toggled === false) {
        item.setAttribute("style", "opacity: 0;");
        btn1Toggled = true;
      } else {
        item.setAttribute("style", "opacity: 1;");
        btn1Toggled = false;
      }
      break;
    case "😠":
      if (btn2Toggled === false) {
        item.setAttribute("style", "background-color: crimson;");
        btn2Toggled = true;
      } else {
        item.setAttribute("style", "background-color: white;");
        btn2Toggled = false;
      }
      break;
    case "😭":
      if (btn3Toggled === false) {
        item.setAttribute("style", "background-color: lightblue;");
        btn3Toggled = true;
      } else {
        item.setAttribute("style", "background-color: white;");
        btn3Toggled = false;
      }
      break;
    case "🥴":
      if (btn4Toggled === false) {
        item.classList.add("jitters");
        btn4Toggled = true;
      } else {
        item.classList.remove("jitters");
        btn4Toggled = false;
      }
      break;
  }
}

function resetButtons() {
  btn1Toggled = true;
  btn2Toggled = true;
  btn3Toggled = true;
  btn4Toggled = true;

  btnArray.forEach(toggleEffect);
}
