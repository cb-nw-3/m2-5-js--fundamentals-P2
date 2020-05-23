// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function palindrome(str) {
  return str === str.split("").reverse().join("");
}

// Add 6 test cases
expect(palindrome("madam"), true);
expect(palindrome("nursesrun"), true);
expect(palindrome("nursesrun"), true);
expect(palindrome("civic"), true);
expect(palindrome("kayak"), true);

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
