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
  let newStr = "";
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (j === 40) {
      if (str[i] === " ") {
        continue;
      } else {
        newStr += "\n";
        j = 0;
      }
    }
    newStr += `${str[i]}`;
    j++;
  }
  return newStr;
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

// Test case 3: Space after newline
expect(
  wrapAfter40Chars(
    "Eat the rich. Eat the rich. Eat the rich. Eat the rich. Eat the rich."
  ),
  "Eat the rich. Eat the rich. Eat the rich\n. Eat the rich. Eat the rich."
);
// Test case 4: Space after newline
expect(
  wrapAfter40Chars(
    "See these hands? Take a look at them. They are the hands of a government man"
  ),
  "See these hands? Take a look at them. Th\ney are the hands of a government man"
);
// Test case 5: Space after newline
expect(
  wrapAfter40Chars(
    "Your name is not James, your name is Simple. I am Mr. Sophisticated"
  ),
  "Your name is not James, your name is Sim\nple. I am Mr. Sophisticated"
);
// Test case 6: Space after newline
expect(
  wrapAfter40Chars(
    "Words, words, words... et tu, brute? all must eat the rich"
  ),
  "Words, words, words... et tu, brute? all\nmust eat the rich"
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
    console.log(`⛔️ Expected \n “${result}” \n to equal \n “${value}”`);
  }
}
