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

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  btns.forEach((btn) => {
    switch (btn.id) {
      case "btn-1": {
        btn.style.opacity = "1";
        break;
      }
      case "btn-2": {
        btn.style.backgroundColor = "gold";
        break;
      }
      case "btn-3": {
        btn.style.backgroundColor = "gold";
        break;
      }
      case "btn-4": {
        btn.classList.remove("jitters");
        break;
      }
    }
  });
});
