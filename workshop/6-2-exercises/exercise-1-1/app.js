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


//select the element containing all buttons, either ul or the id
let buttons = document.getElementById('btn-list');
// console.log(buttons);

//add a single eventlistener for clicks
buttons.addEventListener('click', function(event) {
  //switch case will be dependent on id selection
  let btn = event.target.id;
  // console.log(btn);

  switch(btn) {
    case 'btn-1':
      document.getElementById(btn).style.opacity = 0;
      break;
    case 'btn-2':
      document.getElementById(btn).style.backgroundColor = 'crimson';
      break;
    case 'btn-3':
      document.getElementById(btn).style.backgroundColor = 'lightblue';
      break;
    case 'btn-4':
      document.getElementById(btn).classList.add('jitters');
      break;
  }
})

