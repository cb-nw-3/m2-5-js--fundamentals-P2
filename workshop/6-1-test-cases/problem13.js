// let verifyEquals = require('../../assets/verify-equals');

// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  if(typeof inputString !== 'string'){
    return undefined
  }
  let reverseWord = inputString.split('').reverse().join('')
  if (inputString === reverseWord){
    return true
  }return false
}

expect(checkIsPalindrome('kayak'), true)
expect(checkIsPalindrome('boat'), false)
expect(checkIsPalindrome('kayak laval'), false)
expect(checkIsPalindrome(232), undefined)
expect(checkIsPalindrome('343'), true)
expect(checkIsPalindrome('taco cat'), false)
expect(checkIsPalindrome('tacocat'), true)
// Add 6 test cases

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
