// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)
var btnGroup = document.querySelectorAll(".buttons button");

for (let index = 0; index < btnGroup.length; index++) {
  btnGroup[index].style.backgroundColor = "gold";
  console.log(btnGroup[index]);
}

let btns = document.querySelector(".buttons");
btns.addEventListener("click", function (event) {
  let btnClicked = event.target;
  switch (btnClicked.id) {
    case "btn-1":
      btnClicked.style.opacity = btnClicked.style.opacity === "0" ? "100" : "0";
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
