// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS:
//    - You'll need to use the split string method
//    - A for loop might be helpful

function f(str) {
  const words = str.split(' ');
  let longest = '';

  for (let i = 0; i < words.length; i++) {
    if (longest.length <= words[i].length)
      longest = words[i];
  }
  return longest;
}

// Shorter
function g(str) {
  return str
    .split(' ')
    .reduce(
      (acc, curr) =>
        acc.length < curr.length ? curr : acc,
      ''
    );
}
