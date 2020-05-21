// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  return inputString === inputString.split('').reverse().join('');
}	


// Add 6 test cases
expect(checkIsPalindrome("waw"),true)
expect(checkIsPalindrome("NAN"),true)
expect(checkIsPalindrome("yes"),false)
expect(checkIsPalindrome("121"),true)
expect(checkIsPalindrome("mama"),false)
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
