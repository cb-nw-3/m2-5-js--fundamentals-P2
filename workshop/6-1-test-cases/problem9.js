// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  const stringToArray = str.split(" ");
  let result = "";
  for (let index = 0; index < stringToArray.length; index++) {
    if (result.length <= stringToArray[index].length) {
      result = stringToArray[index];
    }
  }
  return result;
}

// We need 5 test cases
expect(longestWord("hello world"), "world");
expect(longestWord("hi banana"), "banana");
expect(longestWord("bye pineapple tree"), "pineapple");
expect(longestWord("hey coconut"), "coconut");
expect(longestWord("I love tacos"), "tacos");

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
