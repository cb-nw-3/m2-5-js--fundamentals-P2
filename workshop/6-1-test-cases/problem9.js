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
  if (typeof str === "string") {
    let arrayWords = str.split(" ");
    let longestWord = "";
    for (let i = arrayWords.length - 1; i >= 0; i--) {
      if (longestWord.length < arrayWords[i].length) {
        longestWord = arrayWords[i];
      }
    }
    return longestWord;
  }
  return undefined;
}

// We need 5 test cases
expect(longestWord("hey hello morning"), "morning");
expect(longestWord("heyyyyy hello morning"), "morning");
expect(longestWord("heyyyyyy hello morning"), "heyyyyyy");
expect(longestWord(12), undefined);
expect(
  longestWord(
    "01001000 01100101 01101100 01101100 01101111 00100000 01101000 01101111 01110111 00100000 01100001 01110010 01100101 00100000 01111001 01101111 01110101 00100000 01100100 01101111 01101001 01101110 01100111 00111111"
  ),
  "00111111"
);
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
