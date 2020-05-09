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

const buttonList = document.querySelector("#btn-list");
const buttonArr = Array.from(buttonList.querySelectorAll("button"));
const reset = document.querySelector("#reset");

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
    case "reset":
      resetHandler();
      break;
  }
}

function resetHandler() {
  let buttonFour = document.getElementById("btn-4");
  buttonArr.forEach((button) => {
    button.style.background = "gold";
  });
  buttonFour.classList.remove("jitters");
  buttonOne.style.opacity = "1";
}

function toggleColor(target, color) {
  let currentColor = target.style.background;
  target.style.background = currentColor === "gold" ? `${color}` : "gold";
}

buttonList.addEventListener("click", eventHandler);
