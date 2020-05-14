// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {

  reverseString = inputString.split('').reverse().join('');

  if (inputString == reverseString) {
    return true;
  } else {
    return false;
  }
}

// Add 6 test cases
expect(checkIsPalindrome('lol'), true);
expect(checkIsPalindrome('not a palindrome'), false);
expect(checkIsPalindrome('nope'), false);
expect(checkIsPalindrome('My age is 0'), false);
expect(checkIsPalindrome('race car'), false);
expect(checkIsPalindrome('lol lol'), true);

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