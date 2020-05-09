// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  // Your code here
  let reverseWord = inputString.toString().split('').reverse().join('');
  if (inputString === reverseWord) {
    return 'Yes';
  } 
  return 'No'
}

// Add 6 test cases
expect(checkIsPalindrome('radar'), 'Yes')
expect(checkIsPalindrome('JAVASCRIPT'), 'No')
expect(checkIsPalindrome('Ovo'), 'No')
expect(checkIsPalindrome('OvO'), 'Yes')
expect(checkIsPalindrome(121), 'No')
expect(checkIsPalindrome('121'), 'Yes')


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
