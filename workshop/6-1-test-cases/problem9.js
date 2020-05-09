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
  if (typeof str !== "string") return undefined;
  if (str === "") return str;

  let strArray = str.split(" ");

  let longestWord = "";
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length >= longestWord.length) {
      longestWord = strArray[i];
    }
  }

  return longestWord;
}

// We need 5 test cases
expect(longestWord("The quick brown fox jumps over the lazy dog"), "jumps");
expect(longestWord("aa aaa aaaa"), "aaaa");
expect(longestWord("bbbbb bb b"), "bbbbb");
expect(longestWord("cccc cccc cccc aaaa bbbb"), "bbbb");
expect(longestWord("cccc cccc cccc aaaa bbbb zzzz"), "zzzz");

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
