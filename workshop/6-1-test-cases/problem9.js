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
  let strSplit = str.split(' ');
  let longestWordLength = 0;
  let longestWord = '';
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length >= longestWordLength) {
      longestWordLength = strSplit[i].length;
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}

// We need 5 test cases

expect(longestWord('I love hamburgers'), 'hamburgers');
expect(longestWord('He drinks to much coffee'), 'coffee');
expect(longestWord('What is the largest country in the world'), 'country');
expect(
  longestWord('How much did Louisiana cost to the americans'),
  'americans'
);
expect(longestWord('What is my name'), 'name');

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
