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

let buttonList = document.querySelector("#btn-list");
buttonList.addEventListener("click", eventHandler);

const buttonArr = Array.from(buttonList.querySelectorAll("button"));
buttonArr.forEach((button) => {
  button.style.background = "gold";
});

const buttonOne = document.querySelector("#btn-1");
buttonOne.style.opacity = "1";

function eventHandler(event) {
  switch (event.target.id) {
    case "btn-1": {
      event.target.style.opacity =
        event.target.style.opacity === "1" ? "0" : "1";
      break;
    }
    case "btn-2": {
      toggleColor(event.target, "crimson");
      break;
    }
    case "btn-3":
      toggleColor(event.target, "blue");
      break;
    case "btn-4":
      event.target.classList.toggle("jitters");
      break;
  }
}

function toggleColor(target, color) {
  let currentColor = target.style.background;
  target.style.background = currentColor === "gold" ? `${color}` : "gold";
}
