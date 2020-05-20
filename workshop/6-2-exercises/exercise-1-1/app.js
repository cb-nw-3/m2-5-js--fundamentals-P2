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


function hiddenButton() {
button1.style.visibility = "hidden"
}
let button1 = document.getElementsById("btn-1");
button.addEventListener ("click", hiddenButton);
 

let button2 = document.getElementsById("btn-2");
button.style.backgroundColor ="red";

let button3 = document.getElementsById("btn-3");
button.style.backgroundColor ="lightblue";

let button4 = document.getElementsById("btn-4");
button.classlist.add ("jitters");