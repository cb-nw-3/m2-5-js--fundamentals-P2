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

function toggleColour(id, colour) {
    if (document.querySelector(id).style.background === "gold") {
        document.querySelector(id).style.background = colour;
    } else {
        document.querySelector(id).style.background = "gold";
    }
}

function itemSwitch() {
    switch (this.id) {
        case 'btn-1':
            if (this.style.opacity !== "1") {
                this.style.opacity = "1";
            } else {
                this.style.opacity = "0";
            }
            break;
        case 'btn-2':
            toggleColour('#btn-2', 'crimson');
            break;
        case 'btn-3':
            toggleColour('#btn-3', 'lightblue');
            break;
        case 'btn-4':
            this.classList.toggle("jitters");
    }
}

document.querySelectorAll("button").forEach(function (item) {
    item.style.background = "gold";
    item.style.opacity = 1;
    item.addEventListener("click", itemSwitch);
})