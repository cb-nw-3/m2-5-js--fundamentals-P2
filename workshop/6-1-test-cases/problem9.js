// let verifyEquals = require('../../assets/verify-equals');

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
  let arr = str.split(" ");
  let resultArr = [];
  let counter = 0;
  let result = "";

  arr.forEach(function (word) {
    if (word.length > counter) {
      counter = word.length;
    }
  });

  arr.forEach(function (item) {
    if (item.length === counter) {
      resultArr.push(item);
    }
  });
  if (resultArr.length < 2) {
    return resultArr.toString();
  } else {
    return resultArr[resultArr.length - 1];
  }
}

// We need 5 test cases
expect(longestWord("What a world we live in"), "world");
expect(longestWord("Random stuff and not so long words"), "Random");
expect(longestWord("Wowowowowo what"), "Wowowowowo");
expect(longestWord(""), "");
expect(longestWord("These words match"), "match");
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
