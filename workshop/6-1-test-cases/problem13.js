// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  let len = Math.floor(inputString.length / 2);
  for (let i = 0; i < len; i++)
    if (inputString[i] !== inputString[inputString.length - i - 1])
      return false;
  return true;
}

// Add 6 test cases
expect(checkIsPalindrome('laval'), true);
expect(checkIsPalindrome('Racecar'), false);
expect(checkIsPalindrome('RaceCaR'), false);
expect(checkIsPalindrome('bob'), true);
expect(checkIsPalindrome('rob'), false);
expect(checkIsPalindrome('montreal'), false);

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
