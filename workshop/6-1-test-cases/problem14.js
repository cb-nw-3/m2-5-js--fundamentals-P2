// Problem 14 NOT DONE
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  const charArr = str.split("");
  let res = "";

  for (let i = 0; i < charArr.length; i++) {
    if (i % 40 === 0 && i > 0) {
      res += "\n";
      if (charArr[i] !== " ") {
        res += charArr[i];
      }
    } else {
      res += charArr[i];
    }
  }

  return res;
}

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
