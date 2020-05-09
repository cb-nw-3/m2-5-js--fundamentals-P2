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
  "My favourite thing about cats is all the\n things."
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
  "The first step to any conference talk is\n figuring out what you want to talk abou\nt! In my case, I was really passionate a\nbout explorable explanations.  An explor\nable explanation, sometimes just called \nan explorable, is a project that mixes e\nlements of data visualization, journalis\nm, education, and video games to create \ninteractive learning experiences."
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
