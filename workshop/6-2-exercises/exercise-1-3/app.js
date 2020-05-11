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

let btn1Initial = true;
let btn2Initial = true;
let btn3Initial = true;
let btn4Initial = true;

const buttons = document.querySelectorAll("button");
buttons.forEach(function (item) {
  item.style.backgroundColor = "gold";
  if (item.id === "btn-1") {
    item.style.opacity = 1;
  }
});

buttons.forEach(function (item) {
  item.addEventListener("click", toggleColor);
});

function toggleColor(event) {
  switch (event.target.id) {
    case "btn-1": {
      if (btn1Initial) {
        event.target.style.opacity = 0;
        btn1Initial = false;
        break;
      } else {
        event.target.style.opacity = 1;
        btn1Initial = true;
        break;
      }
    }
    case "btn-2": {
      if (btn2Initial) {
        event.target.style.backgroundColor = "crimson";
        btn2Initial = false;
        break;
      } else {
        event.target.style.backgroundColor = "gold";
        btn2Initial = true;
        break;
      }
    }
    case "btn-3": {
      if (btn3Initial) {
        event.target.style.backgroundColor = "lightblue";
        btn3Initial = false;
        break;
      } else {
        event.target.style.backgroundColor = "gold";
        btn3Initial = true;
        break;
      }
    }
    case "btn-4": {
      if (btn4Initial) {
        event.target.classList.add("jitters");
        btn4Initial = false;
        break;
      } else {
        event.target.classList.remove("jitters");
        btn4Initial = true;
        break;
      }
    }
    case "reset": {
      if (!btn1Initial || !btn2Initial || !btn3Initial || !btn3Initial) {
        window.location.reload();
        break;
      }
    }
  }
}
