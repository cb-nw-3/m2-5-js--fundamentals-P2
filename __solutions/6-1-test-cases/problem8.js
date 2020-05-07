// Problem 8
// ---------
// Write a function that returns the input string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
// You must use at least one for loop for this exercise.
// HINTS:
//  - Split your string into an array of characters
//  - Create an empty array
//  - Loop over the array of split characters in reverse order and fill the empty array by pushing each character into it
//  - Convert the filled array into a string (use the join method) and return it

function f(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}
