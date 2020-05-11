// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  // Your code here
  return inputString === inputString.split('').reverse().join('');
}

// Add 6 test cases
expect(checkIsPalindrome("madam"), true);
expect(checkIsPalindrome("racecar"), true);
expect(checkIsPalindrome("11111"), true);
expect(checkIsPalindrome("wow"), true);
expect(checkIsPalindrome("anna"), true);
expect(checkIsPalindrome("javascript"), false);
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
