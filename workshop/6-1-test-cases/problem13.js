// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

/*
1. Si l'inverse du string est la même chose que le string
      return true
2. Else return false
*/

function checkIsPalindrome(inputString) {
  let splitInputString = inputString.split("");
  let reverseArray = splitInputString.reverse();
  if (inputString === reverseArray.join("")) {
    return true;
  } else {
    return false;
  }
}

// Add 6 test cases
expect(checkIsPalindrome("LOL"), true);
expect(checkIsPalindrome("CANDY"), false);
expect(checkIsPalindrome("RADAR"), true);
expect(checkIsPalindrome("BOB"), true);
expect(checkIsPalindrome("BANANA"), false);
expect(checkIsPalindrome("ANANA"), true);
expect(checkIsPalindrome("COCONUT"), false);
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
