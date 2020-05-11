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


function initializeButtonsWithNotClicked()
{
    let allButtons = document.querySelectorAll("button");
    console.log(allButtons.length);

    for (i=0; i<allButtons.length; i++)
    {
        allButtons[i].clicked = false;
        allButtons[i].style.backgroundColor = 'gold';

    }
}


let buttonList = document.querySelector("#btn-list");

buttonList.addEventListener('click', changeButtons);

initializeButtonsWithNotClicked();

function changeButtons(event)
{
    let buttonHit = event.target;
    
    if (buttonHit.id === "btn-1") {

        if (buttonHit.clicked === false)
        {
            buttonHit.style.opacity = "0";
            buttonHit.clicked = true;
    
        } else if (buttonHit.clicked === true){
            buttonHit.style.opacity = "100";
            buttonHit.clicked = false;
        }
    }
    if (buttonHit.id === "btn-2") {

        if (buttonHit.clicked === false)
        {
            buttonHit.style.backgroundColor = "crimson";
            buttonHit.clicked = true;
    
        } else if (buttonHit.clicked === true){
            buttonHit.style.backgroundColor = "gold";
            buttonHit.clicked = false;
        }

    }
    if (buttonHit.id === "btn-3") {
        if (buttonHit.clicked === false)
        {
            buttonHit.style.backgroundColor = "lightblue";
            buttonHit.clicked = true;
    
        } else if (buttonHit.clicked === true){
            buttonHit.style.backgroundColor = "gold";
            buttonHit.clicked = false;
        }
    }

        if (buttonHit.id === "btn-4") {
            if (buttonHit.clicked === false)
            {
                buttonHit.classList.add("jitters");
                buttonHit.clicked = true;
        
            } else if (buttonHit.clicked === true){
                buttonHit.classList.remove("jitters");
                buttonHit.clicked = false;
            }
        }
    }