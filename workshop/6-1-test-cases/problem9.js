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

function f(str) {
  const words = str.split(' ');
  let longest = '';

  for (i = 0; i < words.length; i++) {
    if (longest.length <= words[i].length)
      longest = words[i];
  }
  return longest;
}

expect(f('my friend works on a boat on the danube river'), 'danube');
expect(f('in the province of the mind, i am unlimited'), 'unlimited');
expect(f(''),"");
expect(f('four score and seven years ago, our fathers brought forth on this continent'), 'contenent');
expect(f('naDevvo yIghoS!'), 'yIghoS!');

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
