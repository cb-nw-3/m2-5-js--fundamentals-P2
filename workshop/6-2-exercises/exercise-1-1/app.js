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

function clicked (par) {
    let buttonId = par.target.getAttribute("id");
    let button = document.getElementById(buttonId);

    switch (buttonId) {
        case "btn-1":
            button.style.display = "none";
            break;

        case "btn-2":
            button.style.background = "crimson";
            break;

        case "btn-3":
            button.style.background = "lightblue";
            break;

        case "btn-4":
            button.classList.add("jitters");
            break;

        default:
            break;
    }
}

document.querySelector(".buttons").addEventListener("click", clicked);