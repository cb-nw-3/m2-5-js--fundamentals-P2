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
  if (str === "" || typeof str !== "string" || Number(str) == str) {
    return;
  }
  let arr = str.split(" ");
  let longestString = [];

  arr.forEach(function (word) {
    let stringVar = word.split('');
    if (longestString.length <= stringVar.length) {
      longestString = stringVar.join('');
    }
  });

  return longestString;
}

// We need 5 test cases

expect(longestWord("the biggest freeze"), "biggest");
expect(longestWord("the big cat nap"), "nap");
expect(longestWord(), undefined);
expect(longestWord("931"), undefined);
expect(longestWord([]), undefined);


/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(
      `⛔️ Expected “${result}” to equal “${value}”`
    );
  }
}
