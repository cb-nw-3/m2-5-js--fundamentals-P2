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
  // Place solution here
  if (typeof str !== "string") {
    return undefined;
  } else {
    let strArr = str.split(" ");
    let longest = "";
    strArr.forEach((el) => {
      if (el.length >= longest.length) {
        longest = el;
      }
    });
    return longest;
  }
}

// We need 5 test cases
expect(longestWord(""), "");
expect(longestWord("hey hi hello"), "hello");
expect(longestWord("bobby pizza"), "pizza");
expect(longestWord(123), undefined);
expect(longestWord([]), undefined);
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
