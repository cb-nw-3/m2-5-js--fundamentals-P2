// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
  const words = str.split(' ');
  let capitalizedWords = [];

  for (let i = 0; i < words.length; i++) {
    const capitalizedWord =
      words[i].charAt(0).toUpperCase() +
      words[i].slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(' ');
}

// Shorter
function g(str) {
  const capitalize = (word) =>
    word.charAt(0).toUpperCase() +
    word.slice(1).toLowerCase();
  return str.split(' ').map(capitalize).join(' ');
}
