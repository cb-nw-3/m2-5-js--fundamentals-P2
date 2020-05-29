// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {

  // removes all non-alphanumeric characters and apply a global search
  let regExp = /[^A-Za-z0-9]/g;

  // set all string to lowercase and remove non-alphanumeric characters
  let regStr = inputString.toLowerCase().replace(regExp, '');
  console.log('before ' + regStr);

  let revStr = regStr.split('').reverse().join('');
  console.log('after ' + revStr);

  if (revStr === regStr) {
    return 'Yes';
  }
  return 'No';
}

// Add 6 test cases
expect(checkIsPalindrome('RADAR'), 'Yes');
expect(checkIsPalindrome('JAVASCRIPT'), 'No');
expect(checkIsPalindrome('This is a nice non-palindrome sentence'), 'No');
expect(checkIsPalindrome('Anna'), 'Yes');
expect(checkIsPalindrome('Eva, Can I See Bees In A Cave?'), 'Yes');
expect(checkIsPalindrome(''), 'Yes');

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
