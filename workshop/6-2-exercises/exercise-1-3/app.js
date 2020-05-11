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


function initializeButtonsWithNotClicked()
{
    let allButtons = document.querySelectorAll("button");
    console.log(allButtons.length);

    for (i=0; i<allButtons.length; i++) {
        allButtons[i].clicked = false;
        allButtons[i].style.backgroundColor = 'gold';
    }
}

function resetAllButtons()
{
    let allButtons = document.querySelectorAll("button");
    console.log(allButtons.length);

    for (i=0; i<allButtons.length; i++) {
        allButtons[i].clicked = false;
        allButtons[i].style.backgroundColor = 'gold';
        allButtons[i].style.opacity = '100';
    if (i===3) {
        allButtons[i].classList.remove("jitters");
    }

    }

}


let buttonList = document.querySelector("#btn-list");

buttonList.addEventListener('click', changeButtons);

initializeButtonsWithNotClicked();

function changeButtons(event)
{
    let buttonHit = event.target;
    
    if (buttonHit.id === "btn-1") {

        if (buttonHit.clicked === false) {
            buttonHit.style.opacity = "0";
            buttonHit.clicked = true;
    
        } else if (buttonHit.clicked === true){
            buttonHit.style.opacity = "100";
            buttonHit.clicked = false;
        }
    }
    if (buttonHit.id === "btn-2") {

        if (buttonHit.clicked === false) {
            buttonHit.style.backgroundColor = "crimson";
            buttonHit.clicked = true;
    
        } else if (buttonHit.clicked === true){
            buttonHit.style.backgroundColor = "gold";
            buttonHit.clicked = false;
        }

    }
    if (buttonHit.id === "btn-3") {
        if (buttonHit.clicked === false) {
            buttonHit.style.backgroundColor = "lightblue";
            buttonHit.clicked = true;
    
        } else if (buttonHit.clicked === true){
            buttonHit.style.backgroundColor = "gold";
            buttonHit.clicked = false;
        }
    }

        if (buttonHit.id === "btn-4") {
            if (buttonHit.clicked === false) {
                buttonHit.classList.add("jitters");
                buttonHit.clicked = true;
        
            } else if (buttonHit.clicked === true){
                buttonHit.classList.remove("jitters");
                buttonHit.clicked = false;
            }
        }

        if (buttonHit.id === "reset") {
            resetAllButtons();
        }


    }