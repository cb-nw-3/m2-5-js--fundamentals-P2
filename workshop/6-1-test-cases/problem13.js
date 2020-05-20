// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No
function reverseString(string) {
  return string.split("").reverse().join("");
}

function checkIsPalindrome(inputString) {
  if (typeof inputString !== "string") {
    return undefined;
  } else if (reverseString(inputString) === inputString){
    return true;
  } else {
    return false;
  }
}


// Add 6 test cases
expect(checkIsPalindrome("Hello"), false);
expect(checkIsPalindrome("laval"), true);
expect(checkIsPalindrome(""), true);
expect(checkIsPalindrome(55), undefined);
expect(checkIsPalindrome(true), undefined);
expect(checkIsPalindrome(), undefined);



/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(
      `⛔️ Expected “${result}” to equal “${value}”`
    );
  }
}
