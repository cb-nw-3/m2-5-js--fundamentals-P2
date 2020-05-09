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
let btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.style.backgroundColor = "gold";
  btn.addEventListener("click", btnClick);
});

function btnClick(event) {
  switch (event.target.id) {
    case "btn-1": {
      let opacity = event.target.style.opacity;
      if (opacity === "0") event.target.style.opacity = "1";
      else event.target.style.opacity = "0";
      break;
    }
    case "btn-2": {
      let color = event.target.style.backgroundColor;
      if (color === "gold") event.target.style.backgroundColor = "crimson";
      else event.target.style.backgroundColor = "gold";
      break;
    }
    case "btn-3": {
      let color = event.target.style.backgroundColor;
      if (color === "gold") event.target.style.backgroundColor = "lightblue";
      else event.target.style.backgroundColor = "gold";
      break;
    }
    case "btn-4": {
      event.target.classList.toggle("jitters");
      break;
    }
  }
}
