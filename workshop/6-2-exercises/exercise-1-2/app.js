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
  }
});
