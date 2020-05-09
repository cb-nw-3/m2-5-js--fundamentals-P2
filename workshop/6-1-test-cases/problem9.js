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
  // check if argument is a string
  if (typeof str === 'string') {
    // check if string is empty
    if (str === '') {
      return ''
    } else {
      // split the string in an array of each word
      let strArr = str.split(' ');
      // initialize the variable longest word
      let longestWord = '';
      for (let i = 0; i < strArr.length; i++) {
        // check if current word is longer than variable holder
        if (strArr[i].length >= longestWord.length) {
          // replace if longer
          longestWord = strArr[i];
        }
      }
      return longestWord
    }
  } else {
    return undefined
  }
}

// We need 5 test cases
expect(longestWord('asdf sdf df d asdfasdfasd'), 'asdfasdfasd');
expect(longestWord('1'), '1');
expect(longestWord(123), undefined);
expect(longestWord('asdf sdf df d qwer zxcv gfds'), 'gfds');
expect(longestWord('asdf sdf df d zxcv asdf qwer'), 'qwer');
expect(longestWord(''), '');

/*
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
