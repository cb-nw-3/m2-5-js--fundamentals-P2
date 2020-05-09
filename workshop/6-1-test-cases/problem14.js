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
  if (typeof str === "string") {
    strArray = str.split("");
    for (let i = 40; i < strArray.length; i += 41) {
      strArray.splice(i, 0, "\n");
      if (strArray[i + 1] === " ") {
        strArray.splice(i + 1, 1);
      }
    }
    return strArray.join("");
  }
  return undefined;
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
    "Everything should be made as simple as possible, but not simpler."
  ),
  "Everything should be made as simple as p\nossible, but not simpler."
);

expect(
  wrapAfter40Chars(
    "The first step to any conference talk is figuring out what you want to talk about! In my case, I was really passionate about explorable explanations.  An explorable explanation, sometimes just called an explorable, is a project that mixes elements of data visualization, journalism, education, and video games to create interactive learning experiences."
  ),
  "The first step to any conference talk is\nfiguring out what you want to talk about\n! In my case, I was really passionate ab\nout explorable explanations.  An explora\nble explanation, sometimes just called a\nn explorable, is a project that mixes el\nements of data visualization, journalism\n, education, and video games to create i\nnteractive learning experiences."
);

expect(wrapAfter40Chars("My favourite thing"), "My favourite thing");

expect(wrapAfter40Chars(123), undefined);

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
