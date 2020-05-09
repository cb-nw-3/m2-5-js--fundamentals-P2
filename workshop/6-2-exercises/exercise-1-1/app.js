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

const btnArray = document.querySelectorAll("button");

btnArray.forEach(function (item) {
  //console.log(item.innerText);
  item.addEventListener("click", buttonEffect);
});

function buttonEffect() {
  //console.log(event.target.innerText);
  switch (event.target.innerText) {
    case "💨":
      event.target.setAttribute("style", "opacity: 0;");
      break;
    case "😠":
      event.target.setAttribute("style", "background-color: crimson;");
      break;
    case "😭":
      event.target.setAttribute("style", "background-color: lightblue;");
      break;
    case "🥴":
      event.target.classList.add("jitters");
      break;
  }
}
