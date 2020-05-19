// Exercise 1.2
// ----------
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

// select buttons
let btnOne = document.querySelector('#btn-1');
let btnTwo = document.querySelector('#btn-2');
let btnThree = document.querySelector('#btn-3');
let btnFour = document.querySelector('#btn-4');

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
                if (btnOne.style.opacity === '100') {
                    btnOne.style.opacity = '0';
                } else {
                    btnOne.style.opacity = '100';
                }
                break;
            case btnTwo.id:
                if (btnTwo.style.backgroundColor === 'gold') {
                    btnTwo.style.backgroundColor = 'crimson';
                } else {
                    btnTwo.style.backgroundColor = 'gold';
                }
                break;
            case btnThree.id:
                if (element.style.backgroundColor === 'gold') {
                    element.style.backgroundColor = 'lightblue';
                } else {
                    element.style.backgroundColor = 'gold';
                }
                break;
            case btnFour.id:
                btnFour.classList.toggle('jitters');
                break;
            default:
                break;
        }
    })
})