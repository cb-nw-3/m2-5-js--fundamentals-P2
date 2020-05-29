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

const btnList = document.getElementById('btn-list');

const handleClick = (item) => {
  const btnId = item.target.id;
  const btnEl = document.getElementById(btnId);

  switch (btnId) {
    case 'btn-1':
      btnEl.style.opacity = 0;
      break;
    case 'btn-2':
      btnEl.style.background = 'crimson';
      break;
    case 'btn-3':
      btnEl.style.background = 'lightblue';
      break;
    case 'btn-4':
      btnEl.classList.add('jitters');
      break;
    default:
      break;
  }
}

btnList.addEventListener('click', handleClick);