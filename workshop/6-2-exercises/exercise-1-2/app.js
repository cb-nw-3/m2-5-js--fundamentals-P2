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

let btn = document.querySelector('#btn-list')
let states = {'btn-1': false,'btn-2':false, 'btn-3':false, 'btn-4':false}
let btn1 = document.querySelector('#btn-1') 
btn1.style.background='yellow'
let btn2 = document.querySelector('#btn-2') 
btn2.style.background='yellow'
let btn3 = document.querySelector('#btn-3') 
btn3.style.background='yellow'
let btn4 = document.querySelector('#btn-4') 
btn4.style.background='yellow'
btn.addEventListener('click',function(event){
let {target} = event
    console.log('click',target.id)
    switch(target.id){
        case 'btn-1':
        if (states['btn-1']) {
            target.style.opacity=1
        }   else {
            target.style.opacity=0
        }
        states['btn-1']=!states['btn-1']    
        break;    
        case 'btn-2':
        if(states['btn-2']){
        target.style.background='red'
        }else{
        target.style.background='yellow'        
        }
        states['btn-2']=!states['btn-2'] 
        break;  
        case 'btn-3':
        if(states['btn-3']){    
        target.style.background='blue'
        }else{
        target.style.background='yellow'    
        }
        states['btn-3']=!states['btn-3'] 
        break;   
        case 'btn-4':
        if(states['btn-4']){
        target.classList.add('jitters')
        }else{
        target.classList.remove('jitters')        
        }
        states['btn-4']=!states['btn-4']
        break;   
        default:
        console.log('botton not found')     
    }

})