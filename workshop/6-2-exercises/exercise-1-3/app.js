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

function toggleColour(id, colour) {
    if (document.querySelector('#' + id).style.background === "gold") {
        document.querySelector('#' + id).style.background = colour;
    } else {
        document.querySelector('#' + id).style.background = "gold";
    }
}

function switchStuff() {
    switch (this.id) {
        case "btn-1":
            if (this.style.opacity !== "1") {
                this.style.opacity = "1";
            } else {
                this.style.opacity = "0";
            }
            break;
        case "btn-2":
            toggleColour(this.id, "crimson");
            break;
        case "btn-3":
            toggleColour(this.id, "lightblue");
            break;
        case "btn-4":
            this.classList.toggle("jitters");
            break;
        case "reset":
            document.querySelectorAll("button").forEach(function (item) {
                item.style.background = "gold";
                item.style.opacity = "1";
                if (item.classList.length > 0) {
                    item.classList.remove("jitters");
                }
            })

    }
}

document.querySelectorAll("button").forEach(function (item) {
    item.style.opacity = "1";
    item.style.background = "gold";

    item.addEventListener("click", switchStuff);
});