// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  // check if argument is a string
  if (typeof str === 'string') {
    // split the string in an array
    let strArr = str.split('');
    // initialize the new string
    let newStr = '';
    // loop through the array
    for (let i = 0; i < strArr.length; i++) {
      // do something every fortieth character
      if (i % 40 === 0 && i !== 0) {
        // add enter
        newStr += '\n';
        // check if character is a space
        if (strArr[i] !== ' ') {
          // add it to the new string if not
          newStr += strArr[i]
        }
      } else {
        // add rest of character
        newStr += strArr[i];
      }
    }
    return newStr
  } else {
    return undefined
  }
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
    'My favourite thing about cats is'
  ),
  'My favourite thing about cats is'
);

expect(wrapAfter40Chars(123), undefined);
expect(wrapAfter40Chars([123]), undefined);

// // // // expect(
// // // //   wrapAfter40Chars(
// // // //     'My favourite thing about cats is all the things.My favourite thing about cats is all the things.My favourite thing about cats is all the things.My favourite thing about cats is all the things.'
// // // //   ),
// // // //   'My favourite thing about cats is all the\nthings.My favourite thing about cats is \nall the things.My favourite thing about \ncats is all the things.My favourite thi\nng about cats is all the things.'
// // // // );

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
