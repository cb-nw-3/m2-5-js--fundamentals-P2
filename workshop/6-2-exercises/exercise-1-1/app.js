// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

/*
1. btn-1 = disparait
2. btn-2 = crimson
3. btn-3 = lightblue
4. btn-4 = shaking
*/

let btnList = document.getElementById("btn-list");
btnList.addEventListener("click", function (event) {
  let buttonIdSelection = event.target.id;
  if (buttonIdSelection === "btn-1") {
    document.getElementById(buttonIdSelection).style.opacity = 0;
  } else if (buttonIdSelection === "btn-2") {
    document.getElementById(buttonIdSelection).style.backgroundColor =
      "crimson";
  } else if (buttonIdSelection === "btn-3") {
    document.getElementById(buttonIdSelection).style.backgroundColor =
      "lightblue";
  } else if (buttonIdSelection === "btn-4") {
    document.getElementById(buttonIdSelection).classList.add("jitters");
  }
});
