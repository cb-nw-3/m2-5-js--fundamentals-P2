// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString, ignoreCase = false) {
  // Your code here
  if (typeof(inputString) != 'string') {
    console.log ('input is not a string');
    return undefined;
  }

  if (ignoreCase === false) {
    let rev = inputString.split('').reverse().join('');
    return (inputString === rev);
  } else if (ignoreCase === true) {
    let lowerCasedString = inputString.toLowerCase();
    let rev = lowerCasedString.split('').reverse().join('');
    return (lowerCasedString === rev);
  }

}

// Add 6 test cases

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */

expect (checkIsPalindrome("radar"), true);
expect (checkIsPalindrome("RADAR"), true);
expect (checkIsPalindrome("Radar"), false); // does not ignore case
expect (checkIsPalindrome("Radar", true ), true); // ignores case
expect (checkIsPalindrome("JAVASCRIPT", true ), false); 
expect (checkIsPalindrome("JAVASCRIPT" ), false); 
expect (checkIsPalindrome(123), undefined); // not a string



function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(
      `⛔️ Expected “${result}” to equal “${value}”`
    );
  }
}
