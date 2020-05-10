// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  let forward = inputString.split('');
  let backward = [];
  for(i=forward.length -1; i>=0; i--){
    backward.push(forward[i]);
  }
    let first = forward.join('');
    let second = backward.join('');
    if(first == second){
      return true;
    }else{
      return false;
    }
}

expect(checkIsPalindrome('hello'), false);
expect(checkIsPalindrome('madam'), true);
expect(checkIsPalindrome('redder'), true);
expect(checkIsPalindrome('blubber'), false);
expect(checkIsPalindrome('spider'), false);
expect(checkIsPalindrome('kayak'), true);
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
