// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  let word = inputString.toLowerCase().replace(/ /g, "").split("");
  let isEqual = true;

  for (let index = 0; index < word.length / 2; index++) {
    if (word[index] !== word[word.length - index - 1]) {
      isEqual = false;
    }
  }
  return isEqual;
}

expect(checkIsPalindrome("RADAR"), true);
expect(checkIsPalindrome("JAVASCRIPT"), false);
expect(checkIsPalindrome("A nut for a jar of tuna"), true);
expect(checkIsPalindrome("Taco cat"), true);
expect(checkIsPalindrome("Murder for a jar of red rum"), true);
expect(checkIsPalindrome("who are you"), false);
// Add 6 test cases

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
