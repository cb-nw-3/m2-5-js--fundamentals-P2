// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  // if(typeof(inputString) != 'string') { return false; }
  if(typeof(inputString) == 'string') { 
    let reverse = inputString.split('').reverse().join("");
    console.log(`Original: ${inputString} vs Reversed: ${reverse}`);
    if(inputString == reverse){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }


}

// Add 6 test cases
expect(checkIsPalindrome('RADAR'), true);
expect(checkIsPalindrome('JAVASCRIPT'), false);
expect(checkIsPalindrome(5), false);
expect(checkIsPalindrome(), false);
expect(checkIsPalindrome(['RADAR']), false);
expect(checkIsPalindrome(true), false);

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
