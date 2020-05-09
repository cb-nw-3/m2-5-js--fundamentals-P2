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

document.querySelectorAll("button").forEach(function (item) {
    item.addEventListener("click", function () {
        switch (this.id) {
            case "btn-1":
                this.style.visibility = 'hidden';
                break;
            case "btn-2":
                this.style.background = 'crimson'
                break;
            case "btn-3":
                this.style.background = 'lightblue'
                break;
            case "btn-4":
                this.classList.add("jitters");
                break;
        };
    })
});

