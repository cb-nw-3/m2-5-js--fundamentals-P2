// Problem 1
// ---------
// Step 1
// Write a function that returns the first character of the string that is passed to it.
// If the string does not have a first character, return undefined.

function f(str) {
  if (str.charAt(0) === "") return undefined;
  return str.charAt(0);
}
