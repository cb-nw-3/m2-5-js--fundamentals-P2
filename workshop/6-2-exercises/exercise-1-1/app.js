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

const UL = document.querySelector("ul");
UL.addEventListener("click", (e) => {
  switch (e.path[0].id) {
    case "btn-1":
      e.target.style.display = "none";
      break;
    case "btn-2":
      e.target.style.background = "crimson";
      break;
    case "btn-3":
      e.target.style.background = "lightblue";
      break;
    case "btn-4":
      e.target.classList = "jitters";
      break;
  }
});
