// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  if (typeof inputString === "string") {
    let inputArray = inputString.split("");
    let reverseArray = [];
    for (let i = inputArray.length - 1; i >= 0; i--) {
      reverseArray.push(inputArray[i]);
    }
    return reverseArray.join("") === inputString;
  }
  return false;
}

// Add 6 test cases
expect(checkIsPalindrome("RADAR"), true);
expect(checkIsPalindrome("tacocat"), true);
expect(checkIsPalindrome("bass guitar"), false);
expect(checkIsPalindrome(["taco", "cat"]), false);
expect(checkIsPalindrome(424 + 34), false);
expect(checkIsPalindrome("radar".length), false);

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
