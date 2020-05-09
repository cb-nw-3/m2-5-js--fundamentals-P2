// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {

  if (typeof inputString !== "string") {
    return "no";
  }

  // checking palindromes is kind of weird.
  // take the length of the string.
  // grab string [0] and string [n]; compare for sameness
  // iterate until floor(n/2), I guess
  // as long as the bit is true, it's a palindrome?

  let wordArr = inputString.split('');
  for (let i = 0; i < wordArr.length / 2; i++) {
    if (wordArr[i] !== wordArr[wordArr.length - i - 1]) {
      return "no";
    }
  }
  return "yes";

}

// Add 6 test cases

expect(checkIsPalindrome("radar"), "yes");
expect(checkIsPalindrome("javascript"), "no");
expect(checkIsPalindrome("12321"), "yes");

// per Josh, we should treat strings of numbers as strings of chars, not as numbers.

expect(checkIsPalindrome("-12321"), "no");
expect(checkIsPalindrome(["a", "b", "b", "a"]), "no");
expect(checkIsPalindrome(""), "yes");

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
