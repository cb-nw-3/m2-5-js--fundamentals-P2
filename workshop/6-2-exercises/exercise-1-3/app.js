// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.

function reset(){
    for (let i = 1; i <= 4; i++){
        document.getElementById(`btn-${i}`).style.backgroundColor ="gold";
        document.getElementById(`btn-${i}`).style.opacity = "100";
        if (document.getElementById(`btn-${i}`).classList.length >= 1) {
            document.getElementById(`btn-${i}`).classList.remove("jitters");
        }
    }
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
                button.style.opacity = "100";
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
        
        case "reset":
            reset();
            break;

        default:
            break;
    }
}

reset();

document.querySelector(".buttons").addEventListener("click", clicked);