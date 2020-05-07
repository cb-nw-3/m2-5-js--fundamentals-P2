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
let buttonId1 = document.querySelector("#btn-1");
let buttonId2 = document.querySelector("#btn-2");
let buttonId3 = document.querySelector("#btn-3");
let buttonId4 = document.querySelector("#btn-4");
button.addEventListener("click", function animation(button) {
  switch (button) {
    case buttonId1:
      buttonId1.style.visibility = "hidden";

    case buttonId2:
      buttonId2.style.backgroundColor = "crimson";

    case buttonId3:
      buttonId3.style.backgroundColor = "lightblue";
    case buttonId4:
      buttonId4.classList.toggle = "jitters";
  }
});

function animation(event) {
  const buttonId = event.target.id;
  switch (buttonId) {
    case "#btn-1":
  }
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = `btn-${i}`;
  mainDiv.appendChild(button);

  button.addEventListener("click", turnGreen);
}
