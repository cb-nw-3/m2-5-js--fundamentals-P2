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

const UL = document.querySelector("ul");
UL.addEventListener("click", (e) => {
  let toggleStatus = e.target.dataset.clicked;
  // console.log(toggleStatus);
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
    case "reset":
      const BTNS = document.querySelectorAll("button");
      for (let i = 0; i < 4; i++) {
        BTNS[i].style.display = "block";
        BTNS[i].style.background = "#EFEFEF";
        BTNS[i].dataset.clicked = "false";
        BTNS[i].classList = "";
      }
      break;
  }
});
