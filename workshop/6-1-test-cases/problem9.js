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
  let longestLength = 0;
  let word = "";
  str = str.split(" ");
  str.forEach((element) => {
    if (element.length >= longestLength) {
      longestLength = element.length;
      word = element;
    }
  });
  return word;
}
expect(
  longestWord("This is a really looooooooooong sentence"),
  "looooooooooong"
);
expect(longestWord("This is not good"), "good");
expect(longestWord("This mike is not"), "mike");
expect(longestWord("looooooooong sentences are not good "), "looooooooong");
expect(longestWord("short sentences are good "), "sentences");

// We need 5 test cases

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
