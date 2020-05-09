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
  if(typeof str !== 'string'){
    return undefined
  }
  if(str === ''){
    return ''
  }
  
  let newArray = str.split(' ');
  let longerWord = '';
  for(i = 0; i <= newArray.length-1; i++){
    if(newArray[i].length >= longerWord.length){
      longerWord = newArray[i]
    }
  }return longerWord
}

expect(longestWord('dogs are fucking beautiful'), 'beautiful')
expect(longestWord(245), undefined)
expect(longestWord(''), '')
expect(longestWord('love dove cove'), 'cove')
expect(longestWord('love'),'love')

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
