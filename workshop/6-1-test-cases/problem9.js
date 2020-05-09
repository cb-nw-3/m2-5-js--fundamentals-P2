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
  if(typeof(str)=='string') {
    let words = str.split(" ");
    console.log(words);
    let longest = '';
    words.forEach(word => {
      if(longest.length <= word.length) {
        longest = word;
      }
    })
    console.log(`longest word is: ${longest}`);
    return longest;
  }
}

// We need 5 test cases
expect(longestWord("Hello good morning"),'morning');
expect(longestWord(["Hello morning","aousdbnaoiusbdoaubsd"]),undefined);
expect(longestWord(555),undefined);
expect(longestWord("Hellogoodmorning"),'Hellogoodmorning');
expect(longestWord("hello","good","morning"),'hello');

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
