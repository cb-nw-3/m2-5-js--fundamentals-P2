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

let btn = document.querySelector('#btn-list')
let states = {'btn-1': false,'btn-2':false, 'btn-3':false, 'btn-4':false, 'reset':false}
let btn1 = document.querySelector('#btn-1') 
btn1.style.background='yellow'
let btn2 = document.querySelector('#btn-2') 
btn2.style.background='yellow'
let btn3 = document.querySelector('#btn-3') 
btn3.style.background='yellow'
let btn4 = document.querySelector('#btn-4') 
btn4.style.background='yellow'
let box = document.querySelector('#reset')




btn.addEventListener('click',function(event){
let {target} = event

let resetBtn1 = function () {
    if (states['btn-1']) {
        btn1.style.opacity=1
        
    }   else {
        btn1.style.opacity=0
    
    }
    states['btn-1']=!states['btn-1'] 
}

let resetBtn4 = function () {
    if(states['btn-4']){
        btn4.classList.add('jitters')
    }else{
        btn4.classList.remove('jitters')        
    }
    states['btn-4']=!states['btn-4']
}

let resetBtn3 = function () {
    if(states['btn-3']){    
        btn3.style.background='blue'
    }else{
        btn3.style.background='yellow'    
    }
    states['btn-3']=!states['btn-3'] 
}

let resetBtn2 = function () {
    if(states['btn-2']){
        btn2.style.background='red'
    }else{
        btn2.style.background='yellow'        
    }
    states['btn-2']=!states['btn-2'] 
}

    console.log('click',target.id)
    switch(target.id){
        case 'btn-1':
            resetBtn1();
        // if (states['btn-1']) {
        //     target.style.opacity=1
        // }   else {
        //     target.style.opacity=0
        // }
        // states['btn-1']=!states['btn-1']    
        break;    
        case 'btn-2':
            resetBtn2();
        // if(states['btn-2']){
        // target.style.background='red'
        // }else{
        // target.style.background='yellow'        
        // }
        // states['btn-2']=!states['btn-2'] 
        break;  
        case 'btn-3':
            resetBtn3();
        // if(states['btn-3']){    
        // target.style.background='blue'
        // }else{
        // target.style.background='yellow'    
        // }
        // states['btn-3']=!states['btn-3'] 
        break;   
        case 'btn-4':
            resetBtn4();
        // if(states['btn-4']){
        // target.classList.add('jitters')
        // }else{
        // target.classList.remove('jitters')        
        // }
        // states['btn-4']=!states['btn-4']
        break; 
        case 'reset':
       // if(states['reset']){
            console.log("going into reset")
            resetBtn1();
            resetBtn2();
            resetBtn3();
            resetBtn4();
       // }
        break;
        default:
        console.log('botton not found')     
    }

})