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

let buttonList = document.querySelector("#btn-list");
let btnReset = document.querySelector("#reset");

for (let id = 1; id <= 4; id++) {
  let intBtn = document.getElementById(`btn-${id}`);

  intBtn.style.opacity = "100";
  intBtn.style.backgroundColor = "gold";
}

function toggleColor(id, color) {
  let btnElem = document.getElementById(id);
  let currentColor = btnElem.style.backgroundColor;

  btnElem.style.backgroundColor = currentColor === "gold" ? color : "gold";
}

function clickEvent(event) {
  let btnId = event.target.id;
  let btnElem = document.getElementById(btnId);

  switch (btnId) {
    case "btn-1":
      btnElem.style.opacity = btnElem.style.opacity === "100" ? "0" : "100";
      break;
    case "btn-2":
      toggleColor(btnId, "crimson");
      break;
    case "btn-3":
      toggleColor(btnId, "lightblue");
      break;
    case "btn-4":
      btnElem.classList.add("jitters");
      break;
    default:
      break;
  }
}

buttonList.addEventListener("click", clickEvent);
// STEP 2
// The new RESET button should reset all of the buttons to their original state.

function reset() {
  let btn1 = document.getElementById("btn-1");
  let btn2 = document.getElementById("btn-2");
  let btn3 = document.getElementById("btn-3");
  let btn4 = document.getElementById("btn-4");

  btn1.style.opacity = "100";
  btn2.style.backgroundColor = "gold";
  btn3.style.backgroundColor = "gold";
  btn4.classList.remove("jitters");
}

btnReset.addEventListener("click", reset);

// HINT:
// to remove the 'jitters' class, check the length of the classList.
