// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  if (typeof inputString !== "string") return false;
  let reverse = inputString.split("").reverse().join("");
  return inputString.toLowerCase() === reverse.toLowerCase();
}

// Add 6 test cases
expect(checkIsPalindrome("RADAR"), true);
expect(checkIsPalindrome("RADARS"), false);
expect(checkIsPalindrome(true), false);
expect(checkIsPalindrome(2), false);
expect(checkIsPalindrome("abba"), true);
expect(checkIsPalindrome("abGba"), true);
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
