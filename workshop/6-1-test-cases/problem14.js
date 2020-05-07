// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  if (typeof str === "string") {
    let newStr = [];
    let strArray = str.split("");
    for (let i = 0; i < strArray.length; i++)
      if (i % 40 === 0 && i !== 0) {
        if (strArray[i] === " ") {
          newStr.push(`\n`);
        } else {
          newStr.push(`\n${strArray[i]}`);
        }
      } else {
        newStr.push(strArray[i]);
      }
    return newStr.join("");
  }
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
  wrapAfter40Chars(
    "A palindromic number (also known as a numeral palindrome or a numeric palindrome) is a number that remains the same when its digits are reversed. Like 16461, for example, it is 'symmetrical'."
  ),
  "A palindromic number (also known as a nu\nmeral palindrome or a numeric palindrome\n) is a number that remains the same when\nits digits are reversed. Like 16461, fo\nr example, it is 'symmetrical'."
);

expect(
  wrapAfter40Chars(
    "My favourite thing about cats is all the things. My favourite thing about cats is all the things."
  ),
  "My favourite thing about cats is all the\nthings. My favourite thing about cats i\ns all the things."
);

expect(wrapAfter40Chars(405935), undefined);
expect(
  wrapAfter40Chars(["My", "favourite", "thing", "about", "cats"]),
  undefined
);

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
