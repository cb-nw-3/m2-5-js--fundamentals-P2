// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  // Your code here
  if (inputString.toString().length >= 0) {
    return inputString.toString() === reverse(inputString.toString());
  }
  return undefined;
}

function reverse(str) {
  // Your code here
  if (typeof str === "string") {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  return undefined;
}

// Add 6 test cases
expect(checkIsPalindrome("inputString"), false);
expect(checkIsPalindrome("RADAR"), true);
expect(checkIsPalindrome("RaDAR"), false);
expect(checkIsPalindrome(" kayak"), false);
expect(checkIsPalindrome("kayak"), true);
expect(checkIsPalindrome(121), true);

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
