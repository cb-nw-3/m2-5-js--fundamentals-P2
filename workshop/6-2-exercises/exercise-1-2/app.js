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

const btnArray = document.querySelectorAll("button");

let btn1Toggled = false;
let btn2Toggled = false;
let btn3Toggled = false;

btnArray.forEach(function (item) {
  console.log(item);
  item.addEventListener("click", clickButton);
});

function clickButton() {
  console.log(event.target.innerText);

  switch (event.target.innerText) {
    case "💨":
      if (btn1Toggled === false) {
        event.target.setAttribute("style", "opacity: 0");
        btn1Toggled = true;
      } else {
        event.target.setAttribute("style", "opacity: 1");
        btn1Toggled = false;
      }
      break;
    case "😠":
      if (btn2Toggled === false) {
        event.target.setAttribute("style", "background-color: crimson");
        btn2Toggled = true;
      } else {
        event.target.setAttribute("style", "background-color: white");
        btn2Toggled = false;
      }
      break;
    case "😭":
      if (btn3Toggled === false) {
        event.target.setAttribute("style", "background-color: lightblue");
        btn3Toggled = true;
      } else {
        event.target.setAttribute("style", "background-color: white");
        btn3Toggled = false;
      }
      break;
    case "🥴":
      event.target.classList.toggle("jitters");
      break;
  }
}
