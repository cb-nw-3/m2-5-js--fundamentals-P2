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

let buttonListener = document.querySelector("#btn-list");
buttonListener.addEventListener("click", eventHandler);

function eventHandler(event) {
  switch (event.target.id) {
    case "btn-1": {
      event.currentTarget.querySelector("#btn-1").style.opacity = "0";
      break;
    }
    case "btn-2": {
      event.currentTarget.querySelector("#btn-2").style.background = "crimson";
      break;
    }
    case "btn-3": {
      event.currentTarget.querySelector("#btn-3").style.background = "blue";
      break;
    }
    case "btn-4": {
      event.currentTarget.querySelector("#btn-4").classList.add("jitters");
      break;
    }
  }
}
