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
let buttonList = document.querySelector('.buttons')

buttonList.addEventListener('click', changeButtons);

for(i =1 ; i <= 4; i++){
    let button = document.querySelector(`#btn-${i}`);
    button.style.backgroundColor = 'gold';
    button.style.opacity = '1';
}

function changeButtons (event){
    let targetId = event.target.id
    let buttonClicked = document.querySelector(`#${targetId}`);
    switch(targetId){
        case 'btn-1':
            if(buttonClicked.style.opacity === '1'){
                buttonClicked.style.opacity = '0';
            }else if (buttonClicked.style.opacity === '0'){
                buttonClicked.style.opacity = '1';
            };
            break;
        case 'btn-2':
            toggle('btn-2','crimson');
            break;
        case 'btn-3':
            toggle('btn-3', 'lightblue');
            break;
        case 'btn-4':
            buttonClicked.classList.toggle('jitters');
            break;

    }

};

function toggle (id,color){
    let buttonToToggle = document.querySelector(`#${id}`);
    let currentColor = buttonToToggle.style.backgroundColor;
    switch(currentColor){
        case 'gold':
            buttonToToggle.style.backgroundColor = `${color}`
            break;
        default:
            buttonToToggle.style.backgroundColor = `gold`
            break;

    }
}