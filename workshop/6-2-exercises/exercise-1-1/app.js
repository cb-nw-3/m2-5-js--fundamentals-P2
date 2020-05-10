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

let btns = document.querySelector(".buttons");
btns.addEventListener("click", function (event) {
  switch (event.srcElement.id) {
    case "btn=1":
      event.srcElement.style.visibility = "hidden";
      break;
    case "btn-2":
      event.srcElement.style.backgroundColor = "crimson";
      break;
    case "btn-3":
      event.srcElement.style.backgroundColor = "lightblue";
      break;
    default:
      event.srcElement.classList.add("jitters");
  }
});
