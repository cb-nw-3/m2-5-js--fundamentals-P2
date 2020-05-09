// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  if (typeof str !== "string") {
    return;
  }
  let charArray = str.split('');
  let arrayCount = Math.floor(charArray.length / 40);
  for (let i = 1; i <= arrayCount; i++) {
    if (charArray[40 * i] === " ") {
      charArray.splice(40 * i, 1, "\n");
    } else {
      charArray.splice(40 * i, 0, "\n");
    }
  }
  return charArray.join('');
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

// too short

expect(
  wrapAfter40Chars(
    'This is a short string.'
  ),
  'This is a short string.'
);

// non-string value

expect(
  wrapAfter40Chars(
    []
  ),
  undefined
);
expect(
  wrapAfter40Chars(
    ""
  ),
  ""
);
expect(
  wrapAfter40Chars(
    "Merging is how Git combines code from multiple sources. It will allow us to incorporate the changes from the master branch without losing any of our work."
  ),
  "Merging is how Git combines code from mu\nltiple sources. It will allow us to inco\nrporate the changes from the master bran\nch without losing any of our work."
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
