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

  // Split the string into an array of strings
  let newArr = str.split(' ');

  let longestWord = '';

  // Create a loop to go thru each el
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length >= longestWord.length) {
      longestWord = newArr[i];
    }
  }
  console.log(`The longest word is '${longestWord}' and has ${longestWord.length} characters.`)
  return longestWord;
}

// We need 5 test cases
expect(longestWord('hey hello morning'), 'morning')
expect(longestWord(''), '');
expect(longestWord('test1 test2 test3'), 'test3');
expect(longestWord('This is some coooool test'), 'coooool');
expect(longestWord('1 2 3 4 5'), '5');

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
