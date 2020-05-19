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

// select buttons
let btnOne = document.querySelector('#btn-1');
let btnTwo = document.querySelector('#btn-2');
let btnThree = document.querySelector('#btn-3');
let btnFour = document.querySelector('#btn-4');
let setButtonsToDefault = false;

//create reset button with onclick function to call reset function

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

document.getElementById('btn-list').style.marginTop = '15px';

//reset function
function reset() {
    setButtonsToDefault = true;
    btnId.forEach(element => {
        element.click();
    });
    setButtonsToDefault = false;
}
//setBtnsToDefault = true
//will loop over btnIds and trigger their clicks
//setBtnsToDefault = false

// create an array for all the buttons
let btnId = [btnOne, btnTwo, btnThree, btnFour]

//set default attributes
btnOne.style.opacity = '100';
btnOne.style.backgroundColor = 'gold';
btnTwo.style.backgroundColor = 'gold';
btnThree.style.backgroundColor = 'gold';
btnFour.style.backgroundColor = 'gold';

// create a loop to combine all actions into one function
btnId.forEach(element => {

    element.addEventListener('click', function () {

        switch (element.id) {
            case btnOne.id:
                if (btnOne.style.opacity === '100' && setButtonsToDefault != true) {
                    btnOne.style.opacity = '0';
                } else {
                    btnOne.style.opacity = '100';
                }
                break;
            case btnTwo.id:
                if (btnTwo.style.backgroundColor === 'gold' && setButtonsToDefault != true) {
                    btnTwo.style.backgroundColor = 'crimson';
                } else {
                    btnTwo.style.backgroundColor = 'gold';
                }
                break;
            case btnThree.id:
                if (element.style.backgroundColor === 'gold' && setButtonsToDefault != true) {
                    element.style.backgroundColor = 'lightblue';
                } else {
                    element.style.backgroundColor = 'gold';
                }
                break;
            case btnFour.id:
                // take away jitters
                if (!btnFour.classList.contains('jitters') && setButtonsToDefault != true) {
                    btnFour.classList.add('jitters');
                } else {
                    btnFour.classList.remove('jitters');
                }

                break;
            default:
                break;
        }
    })
})