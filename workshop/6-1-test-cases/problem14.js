// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  let chunks = [];

  while (str.length > 0 || str !== "") {
    if (str[0] === " ") {
      str = str.slice(1);
    }
    let chunk = str.slice(0, 40);
    chunks.push(chunk);
    str = str.slice(40);
  }
  return chunks.join("\n");
}

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
expect(
  wrapAfter40Chars("1234567890 1234567890 1234567890 1234567890"),
  "1234567890 1234567890 1234567890 1234567\n890"
);

expect(
  wrapAfter40Chars("1234567890123456789012345678901234567890 Bye bye bye!"),
  "1234567890123456789012345678901234567890\nBye bye bye!"
);

expect(wrapAfter40Chars("1234567890"), "1234567890");

expect(wrapAfter40Chars("[]"), "[]");
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
