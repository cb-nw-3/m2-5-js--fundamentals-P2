// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  let reversedString = inputString.split("").reverse().join("");
  return inputString === reversedString;
}

// Add 6 test cases
expect(checkIsPalindrome("radar"), true);
expect(checkIsPalindrome("bottom"), false);
expect(checkIsPalindrome("treetop"), false);
expect(checkIsPalindrome("civic"), true);
expect(checkIsPalindrome("deified"), true);
expect(checkIsPalindrome("level"), true);
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
