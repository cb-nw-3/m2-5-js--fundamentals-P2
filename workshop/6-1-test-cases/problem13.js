// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  const splitString = inputString.split("");
  const reverseArray = splitString.reverse();
  const reversedString = reverseArray.join("");

  if (reversedString !== inputString) {
    return "No";
  } else {
    return "Yes";
  }
}

// Add 6 test cases
expect(checkIsPalindrome("radar"), "Yes");
expect(checkIsPalindrome("java"), "No");
expect(checkIsPalindrome("script"), "No");
expect(checkIsPalindrome("laval"), "Yes");
expect(checkIsPalindrome("anana"), "Yes");
expect(checkIsPalindrome("cheese"), "No");
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(
      `⛔️ Expected “${result}” to equal “${value}”`
    );
  }
}
