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

let btnList = document.getElementById("btn-list");
btnList.addEventListener("click", function (event) {
  let buttonIdSelection = event.target.id;
  if (buttonIdSelection === "btn-1") {
    if (document.getElementById(buttonIdSelection).style.opacity == 0) {
      document.getElementById(buttonIdSelection).style.opacity = 100;
    } else {
      document.getElementById(buttonIdSelection).style.opacity = 0;
    }
  } else if (buttonIdSelection === "btn-2") {
    if (
      document.getElementById(buttonIdSelection).style.backgroundColor == "gold"
    ) {
      document.getElementById(buttonIdSelection).style.backgroundColor =
        "crimson";
    } else {
      document.getElementById(buttonIdSelection).style.backgroundColor = "gold";
    }
  } else if (buttonIdSelection === "btn-3") {
    if (
      document.getElementById(buttonIdSelection).style.backgroundColor == "gold"
    ) {
      document.getElementById(buttonIdSelection).style.backgroundColor =
        "lightblue";
    } else {
      document.getElementById(buttonIdSelection).style.backgroundColor = "gold";
    }
  } else if (buttonIdSelection === "btn-4") {
    document.getElementById(buttonIdSelection).classList.toggle("jitters");
  } else if (buttonIdSelection === "reset") {
    for (let index = 1; index <= 4; index++) {
      const resetButton = document.getElementById("btn-" + index);
      resetButton.style.backgroundColor = "gold";
      resetButton.style.opacity = 100;
      if (index === 4) {
        resetButton.classList.remove("jitters");
      }
    }
  }
});
