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
  if (str === "") {
    return undefined;
  } else {
    let strSplit = str.split(" ");
    return strSplit.reduce(longer);
  }
}

function longer(longest, currentWord) {
  if (longest.length > currentWord.length) {
    return longest;
  } else {
    return currentWord;
  }
}

// We need 5 test cases
expect(longestWord("The quick brown fox jumped over the lazy dog"), "jumped");
expect(longestWord("hey hello morning"), "morning");
expect(longestWord("hey he hie"), "hie");
expect(longestWord("9 99 999"), "999");
expect(longestWord(""), undefined);

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
