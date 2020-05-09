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

const UL = document.querySelector("ul");
UL.addEventListener("click", (e) => {
  let toggleStatus = e.target.dataset.clicked;
  console.log(toggleStatus);
  switch (e.path[0].id) {
    case "btn-1":
      if (toggleStatus == "false" || toggleStatus === undefined) {
        e.target.style.display = "none";
        e.target.dataset.clicked = "true";
        break;
      } else {
        //this won't do nothing still nice to have
        e.target.style.display = "block";
        e.target.dataset.clicked = "false";
      }
    case "btn-2":
      if (toggleStatus == "false" || toggleStatus === undefined) {
        e.target.style.background = "crimson";
        e.target.dataset.clicked = "true";
        break;
      } else {
        e.target.style.background = "#EFEFEF";
        e.target.dataset.clicked = "false";
      }
      break;
    case "btn-3":
      if (toggleStatus == "false" || toggleStatus === undefined) {
        e.target.style.background = "lightblue";
        e.target.dataset.clicked = "true";
        break;
      } else {
        e.target.style.background = "#EFEFEF";
        e.target.dataset.clicked = "false";
      }
      break;
    case "btn-4":
      if (toggleStatus == "false" || toggleStatus === undefined) {
        e.target.classList = "jitters";
        e.target.dataset.clicked = "true";
        break;
      } else {
        e.target.classList = "";
        e.target.dataset.clicked = "false";
      }
      break;
  }
});
