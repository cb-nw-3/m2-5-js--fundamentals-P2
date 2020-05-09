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
  let string = str.split(" ", str.length)
  let long = '';

  for(i = 0; i < string.length; i++) {
    if (long.length <= string[i].length)
    long = string[i];
  }
  return long;
}

// We need 5 test cases
expect(longestWord('hi who where'), 'where');
expect(longestWord(''), '');
expect(longestWord('the who why'), 'why');
expect(longestWord('a ab abc abcd abcde'), 'abcde');
expect(longestWord('hello'), 'hello');

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
