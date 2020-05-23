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

let myButtons = document.querySelector("#btn-list");

function clickEffects(event) {
  let { target } = event; //same as let target = event.target
  let btnId = target.id; //target is dom node for button I click on
  switch (btnId) {
    case "btn-1":
      target.style.opacity = 0;
      break;
    case "btn-2":
      target.style.background = "crimson";
      break;
    case "btn-3":
      target.style.background = "lightblue";
      break;
    case "btn-4":
      target.classList.add("jitters");
      break;
    default:
      break;
  }
}

myButtons.addEventListener("click", clickEffects);
