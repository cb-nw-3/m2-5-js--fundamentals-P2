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
let buttonList = document.querySelector('.buttons');

for(i=1; i<=4; i++){
    let button = document.querySelector(`#btn-${i}`);
    button.style.backgroundColor = 'gold'
    button.style.opacity = '1' 
}

function reset (){

    for(i=1; i<=4; i++){
        let button = document.querySelector(`#btn-${i}`);
        button.style.backgroundColor = 'gold'
        button.style.opacity = '1' 
        if(i === 4){
            if(button.classList.length > 0){
                button.classList.remove('jitters');
            };
        };
};

}
buttonList.addEventListener('click',buttonBehaviours);

function buttonBehaviours (event){
    let id = event.target.id;
    let button = document.querySelector(`#${id}`)

    switch(id){
        case 'btn-1':
            if(button.style.opacity === '1'){
                button.style.opacity = '0';
            }else {
                button.style.opacity = '1'
            }
            break;
        case 'btn-2':
            toggle(id, 'crimson');
            break;
        case 'btn-3':
            toggle(id, 'lightblue')
            break;
        case 'btn-4':
            button.classList.toggle('jitters');
            break;
        case 'reset':
            reset();
            break;
    }

}

function toggle(id, color){
    let button = document.querySelector(`#${id}`)
    let defaultColor = button.style.backgroundColor

    switch(defaultColor){
        case 'gold':
            button.style.backgroundColor = `${color}`;
            break;
        default:
            button.style.backgroundColor = `gold`
    }
}