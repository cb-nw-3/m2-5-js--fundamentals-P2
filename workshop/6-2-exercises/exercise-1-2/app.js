// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)
let buttonList = document.querySelector("#btn-list");

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

for (let id = 1; id <= 4; id++) {
  let initialButton = document.getElementById(`btn-${id}`);

  initialButton.style.opacity = "100";
  initialButton.style.backgroundColor = "gold";
}

function toggleColor(id, color) {
  let buttonElem = document.getElementById(id);
  let currentColor = buttonElem.style.backgroundColor;

  buttonElem.style.backgroundColor = currentColor === "gold" ? color : "gold";
}

function animateButtons(event) {
  let buttonId = event.target.id;
  let buttonElem = document.getElementById(buttonId);

  switch (buttonId) {
    case "btn-1":
      buttonElem.style.opacity =
        buttonElem.style.opacity === "100" ? "0" : "100";
      break;
    case "btn-2":
      toggleColor(buttonId, "crimson");
      break;
    case "btn-3":
      toggleColor(buttonId, "lightblue");
      break;
    case "btn-4":
      buttonElem.classList.add("jitters");
      break;
    default:
      break;
  }
}

buttonList.addEventListener("click", animateButtons);
