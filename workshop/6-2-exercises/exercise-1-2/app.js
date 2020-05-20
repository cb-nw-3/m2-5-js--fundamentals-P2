// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

for (let i = 1; i <= 4; i++){
    document.getElementById(`btn-${i}`).style.backgroundColor ="gold";
    document.getElementById(`btn-${i}`).style.opacity = "1";
}

function toggleColor(id,color){
    let button = document.getElementById(id);

    if (button.style.backgroundColor !== "gold"){
        button.style.backgroundColor = "gold";
    } else {
        button.style.backgroundColor = color;
    }
}

function clicked (par) {
    let buttonId = par.target.getAttribute("id");
    let button = document.getElementById(buttonId);

    switch (buttonId) {
        case "btn-1":

            if (button.style.opacity !== "0") {
                button.style.opacity = "0";
            } else {
                button.style.opacity = "1";
            }

            break;

        case "btn-2":
            toggleColor(buttonId, "crimson");
            break;

        case "btn-3":
            toggleColor(buttonId, "lightblue");
            break;

        case "btn-4":
            button.classList.add("jitters");
            break;

        default:
            break;
    }
}

document.querySelector(".buttons").addEventListener("click", clicked);