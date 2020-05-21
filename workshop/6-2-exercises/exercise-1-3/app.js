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

let buttonList = document.querySelector("#btn-list");

function toggleColour(id, colour) {
  let button = document.querySelector(`#${id}`);

  if (button.style.background === "gold") {
    button.style.background = `${colour}`;
  } else {
    button.style.background = "gold";
  }
}

document.querySelectorAll("button").forEach(function (button) {
  button.style.background = "gold";
  button.style.opacity = 1;
});

function clickEffects(event) {
  let buttonID = event.target.id;
  let btn = document.getElementById(buttonID);

  switch (buttonID) {
    case "btn-1":
      if (btn.style.opacity === "1") {
        btn.style.opacity = "0";
      } else {
        btn.style.opacity = "1";
      }
      break;
    case "btn-2":
      toggleColour("btn-2", "crimson");
      break;
    case "btn-3":
      toggleColour("btn-3", "lightblue");
      break;
    case "btn-4":
      btn.classList.toggle("jitters");
      break;
    case "reset":
      document.querySelectorAll("button").forEach(function (button) {
        button.style.background = "gold";
        button.style.opacity = 1;
        if (button.classList.length > 0) {
          button.classList.remove("jitters");
        }
      });
      break;
    default:
      break;
  }
}

buttonList.addEventListener("click", clickEffects);
