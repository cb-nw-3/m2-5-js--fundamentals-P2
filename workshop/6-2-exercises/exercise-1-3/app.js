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

function factoryReset() {
  let btnGroup = document.querySelectorAll(".buttons button");
  for (let index = 0; index < btnGroup.length - 1; index++) {
    if (index === btnGroup.length - 2) {
      btnGroup[index].classList.remove("jitters");
    }
    btnGroup[index].setAttribute(
      "style",
      "background-color: gold; opacity: 1;"
    );
  }
}
factoryReset();
let btns = document.querySelector(".buttons");
btns.addEventListener("click", function (event) {
  let btnClicked = event.target;
  switch (btnClicked.id) {
    case "btn-1":
      btnClicked.style.opacity = btnClicked.style.opacity == "0" ? "100" : "0";
      break;
    case "btn-2":
      btnClicked.style.backgroundColor =
        btnClicked.style.backgroundColor === "gold" ? "crimson" : "gold";
      break;
    case "btn-3":
      btnClicked.style.backgroundColor =
        btnClicked.style.backgroundColor === "gold" ? "lightblue" : "gold";
      break;
    case "btn-4":
      btnClicked.classList.contains("jitters")
        ? btnClicked.classList.remove("jitters")
        : btnClicked.classList.add("jitters");
      break;
  }
});

let btnRestore = document.querySelector("#reset");
btnRestore.addEventListener("click", factoryReset);
