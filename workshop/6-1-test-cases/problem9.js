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
  let strArray = str.split(" ");
  let sortedStrArr = strArray.sort(function (strA, strB) {
    return strB.length - strA.length;
  });

  if (sortedStrArr[0] === "") {
    return "";
  }

  if (sortedStrArr[0].length && sortedStrArr[1].length) {
    //I return the first one that matches
    return sortedStrArr[0];
  }

  return sortedStrArr[0];
}

// We need 5 test cases
expect(longestWord("how are you mister"), "mister");
expect(longestWord(""), "");
expect(longestWord("Yes my name is Jack"), "name");
expect(longestWord("can I have some cash for food"), "have");
expect(longestWord("help me I need to code this"), "help");
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(
      `⛔️ Expected “${result}” to equal “${value}”`
    );
  }
}
