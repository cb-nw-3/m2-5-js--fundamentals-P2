// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".
function wrapAfter40Chars(str) {
  let line = str.length;
  let i = 0;
  let maxChar = 40;
  while (line > maxChar) {
    line = line - maxChar;
    i = i + maxChar;
    str = str.substring(0, maxChar) + "\n" + str.substring(maxChar);
  }
  return str;
}

/*let newLine = "";
  while (str.length > 0) {1
    newLine += str.substring(0, 40) + "\n";
    str = str.substring(40);
  }
  return newLine;*/

// Test case 1: No space after newline
expect(
  wrapAfter40Chars(
    "This is a very long string! It seems to go on forever. Sadly, it does not."
  ),
  "This is a very long string! It seems to \ngo on forever. Sadly, it does not."
);

// Test case 2: Space after newline
expect(
  wrapAfter40Chars("My favourite thing about cats is all the things."),
  "My favourite thing about cats is all the\nthings."
);

// Add 4 more test cases

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
