// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  // Your code here
  let str = inputString.toLowerCase().split("").reverse().join("");
  return inputString.toLowerCase().split("").join("") === str;
}

// Add 6 test cases
expect(checkIsPalindrome("ABBA"), true);
expect(checkIsPalindrome("Radar"), true);
expect(checkIsPalindrome("123"), false);
expect(checkIsPalindrome("pizza"), false);
expect(checkIsPalindrome("doooooD"), true);
expect(checkIsPalindrome("sneeze"), false);
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
