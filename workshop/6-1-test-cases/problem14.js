// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  let arr = str.split("");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 40 === 0) {
      result += "\n";
      if (arr[i] !== " ") {
        result += arr[i];
      }
    } else {
      result += arr[i];
    }
  }
  return result;
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

expect(
  wrapAfter40Chars(
    "You were the reason they stuck around, you're old enough now."
  ),
  "You were the reason they stuck around bu\nt you're old enough now."
);

expect(
  wrapAfter40Chars(
    "There will still be a lecture starting at 9, but it will be very short."
  ),
  "There will still be a lecture starting a\nt 9, but it will be very short."
);

expect(
  wrapAfter40Chars(
    "When there are people in the queue, we will try to keep each consultation to less than 20 minutes."
  ),
  "When there are people in the queue, we w\nill try to keep each consultation to les\ns than 20 minutes."
);

expect(
  wrapAfter40Chars(
    "Welcome to the Zoom Legal Center. The information provided here is for Zoom users who have questions about our terms, policies, and compliance."
  ),
  "Welcome to the Zoom Legal Center. The in\nformation provided here is for Zoom user\ns who have questions about our terms, po\nlicies, and compliance."
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
