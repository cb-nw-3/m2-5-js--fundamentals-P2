// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  // check if argument is a string
  if (typeof inputString === 'string') {
    // split the string in an array of each element
    let strArr = inputString.split('');
    // initialize the new array
    let newArr = [];
    // loop through the first array
    for (let i = 0; i < strArr.length; i++) {
      // add element in the first position of new array
      newArr.unshift(strArr[i].toLowerCase());
    }
    // join new array in a new string
    let newStr = newArr.join('');
    // check if new string is identical to input string
    if (newStr === inputString.toLowerCase()) {
      return true
    } else {
      return false
    }
  } else {
    return undefined
  }
}

// Add 6 test cases
expect(checkIsPalindrome('raCecar'), true);
expect(checkIsPalindrome('race car'), false);
expect(checkIsPalindrome(123), undefined);
expect(checkIsPalindrome('radar'), true);
expect(checkIsPalindrome('racecar'), true);
expect(checkIsPalindrome('rac e car'), true);
expect(checkIsPalindrome(true), undefined);

/*
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
