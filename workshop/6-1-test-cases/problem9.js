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
  let currentLongestWord = '';
  let words = str.split(' ');

  words.forEach(wordChecker);

  function wordChecker(word, index) {
    //Check longest current word against the current word in loop

    if (currentLongestWord.length <= word.length) {
      currentLongestWord = word;
    }
  }

  return currentLongestWord;

}

// We need 5 test cases
expect(longestWord('testing this out'), 'testing');
expect(longestWord('hi hi rains hello'), 'hello');
expect(longestWord('hi hi rain hello'), 'hello');
expect(longestWord('hello hello hello hello'), 'hello');
expect(longestWord('a b c d e'), 'e');

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