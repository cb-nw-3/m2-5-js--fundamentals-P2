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
  if (typeof str === "string") {
    if (str === "") {
      return "";
    }
    let wordArray = str.split(" ");
    let longWordCharCount = 0;
    let longestWord = "";
    wordArray.forEach(function (item) {
      if (item.length >= longWordCharCount) {
        longWordCharCount = item.length;
        longestWord = item;
      }
    });
    return longestWord;
  }
}

// We need 5 test cases
expect(longestWord("hey hello morning"), "morning");
expect(longestWord("calm diet prop suns cube"), "cube");
expect(longestWord(""), "");
expect(longestWord(4245), undefined);
expect(longestWord(["calm", "diet", "prop", "suns", "cube"]), undefined);
expect(longestWord("poche"), "poche");

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
