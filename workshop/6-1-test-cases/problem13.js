// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  if (inputString === "" || typeof inputString !== "string") {
    return undefined;
  } else {
    let reversedString = inputString.split("").reverse().join("");
    if (inputString === reversedString) {
      return true;
    } else {
      return false;
    }
  }
}

// Add 6 test cases
expect(checkIsPalindrome("radar"), true);
expect(checkIsPalindrome("javascript"), false);
expect(checkIsPalindrome(""), undefined);
expect(checkIsPalindrome(), undefined);
expect(checkIsPalindrome("Radar"), false);
expect(checkIsPalindrome(343), undefined);
expect(checkIsPalindrome("343"), true);

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
