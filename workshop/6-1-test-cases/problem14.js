// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {

  // The number we want to add new line to make the sentence "wrap"
  let wrapAmount = 39;

  //Final output with the new lines added
  let wrappedResult = '';

  // create a loop to check string length VS max character length + to add \n after 40th character
  for (i = 0; i < str.length; i++) {
    //Check every 40 characters
    remainderForty = i % wrapAmount;
    //If there is no remainder, we must be at every 40 characters
    if (remainderForty == 0 && i != 0) {
      wrappedResult += str[i] + '\n';
      let checkNextChar = str[i + 1];
      if (checkNextChar === ' ') {
        i++;
      }
    } else {
      wrappedResult += str[i];
    }
  }
  return wrappedResult;
}

// Test case 1: No space after newline
expect(
  wrapAfter40Chars(
    'This is a very long string! It seems to go on forever. Sadly, it does not.'
  ),
  'This is a very long string! It seems to \ngo on forever. Sadly, it does not.'
);

// Test case 2: Space after newline
expect(
  wrapAfter40Chars(
    'My favourite thing about cats is all the things.'
  ),
  'My favourite thing about cats is all the\nthings.'
);

// Add 4 more test cases
expect(
  wrapAfter40Chars(
    ' '
  ),
  ' '
);

expect(
  wrapAfter40Chars(
    'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdf'
  ),
  'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdf\n'
);

expect(
  wrapAfter40Chars(
    'Hello My Name is Ashley Hynes and I\'m Learning How to Code'
  ),
  'Hello My Name is Ashley Hynes and I\'m Le\narning How to Code'
);

expect(
  wrapAfter40Chars(
    'Hello'
  ),
  'Hello'
);
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