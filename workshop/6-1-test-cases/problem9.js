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
  if (str === "") {
    return "";
  }
  else {  var Arr = str.split(" ");
  var longest = 0;
  var word = null;

  Arr.forEach(function(str) {
      if (longest < str.length) {
          longest = str.length;
          word = str;
      }
  });

return word;
}


}

// We need 5 test cases
expect(longestWord("hey hello morning"), "morning")
expect(longestWord(""), "")
expect(longestWord("hey goodbye hi"), "goodbye")
expect(longestWord("goodbye-again hello morning"), "goodbye-again")
expect(longestWord("123456789abc hello morning"), "123456789abc")
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
