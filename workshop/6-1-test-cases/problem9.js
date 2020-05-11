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

  if (typeof(str) != 'string') {
    console.log ('input is not a string');
    return undefined;
  }

  let indivWords = str.split(' ');
  let longestLength = 0;
  let longestWord;
  indivWords.forEach(
    function (element) {
      if (element.length >= longestLength)
      {
        longestLength = element.length;
        longestWord = element;
      }
    }
  );
  return longestWord;
}

expect(longestWord("hey hello morning"), "morning");
expect(longestWord("hey morning hello mornin1"), "mornin1");
expect(longestWord(3333), undefined); 
expect(longestWord("hey hey         hello hey"), "hello"); // interesting test example, use a bunch of spaces
expect(longestWord("hey hey hello hey"), "hello"); 
expect(longestWord("hey morning hello mornin1"), "morning"); // test should fail!



// We need 5 test cases

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
