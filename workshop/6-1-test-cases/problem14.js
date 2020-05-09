// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  // Your code here!
  let phrase = str.split('');
  let newLine = '';
  let letter = 0;

  while (letter < str.length){
    if (letter % 40 === 0 && letter > 0) {
      newLine += '\n';
      if (phrase[letter] !== '') {
        newLine += phrase[letter];
      }
    } else {
      newLine += phrase[letter];
    }
    letter++;
  }
  return newLine;
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
    'Hello!'
  ),
  'Hello!'
);
expect(
  wrapAfter40Chars(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  ),
  'Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem \nIpsum has been the industry'
);

expect(
  wrapAfter40Chars(
    '123'
  ),
  '123'
);

expect(
  wrapAfter40Chars(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
  ),
  'Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem \nIpsum'
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
