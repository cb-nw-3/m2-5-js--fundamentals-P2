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

let btn = document.querySelector('#btn-list')
btn.addEventListener('click',function(event){
let {target} = event
    console.log('click',target.id)
    switch(target.id){
        case 'btn-1':
        target.style.opacity=0
        break;    
        case 'btn-2':
        target.style.background='red'
        break;  
        case 'btn-3':
        target.style.background='blue'
        break;   
        case 'btn-4':
        target.classList.add('jitters')
        break;   
        default:
        console.log('botton not found')     
    }

})
