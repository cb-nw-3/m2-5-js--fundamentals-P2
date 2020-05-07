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

let buttonList = document.querySelector("#btn-list");

function animation(event) {
  let buttonId = event.target.id;
  let buttonElem = document.getElementById(buttonId);
  switch (buttonId) {
    case "btn-1":
      buttonElem.style.visibility = "hidden";
      break;
    case "btn-2":
      buttonElem.style.backgroundColor = "crimson";
      break;
    case "btn-3":
      buttonElem.style.backgroundColor = "lightblue";
      break;
    case "btn-4":
      buttonElem.classList.add("jitters");
      break;
    default:
      break;
  }
}

buttonList.addEventListener("click", animation);
