// Problem 2
// ---------

// Step 1
// Write a function that returns the LAST character of the string that is
// passed to it.
// - If it's an empty string, return `undefined`
// - If it's a number, return `undefined`

function lastCharacter(str) {
  let lastChar = str.charAt(str.length - 1);
  if (lastChar === " ") return undefined;
  let lastNum = parseInt(lastChar); //will check numbers that are integers/ use parseFloat for decimal nos.
  if (!isNaN(lastNum)) return undefined;
  return lastChar;
}
// Step 2
// You're given 1 test case. Add 4 more, making sure to cover all of the
// conditions specified above (don't forget empty string and number!!)

expect(lastCharacter("max"), "x");
expect(lastCharacter("whimsical"), "l");
expect(lastCharacter(" "), "l");
expect(lastCharacter("33"), "3");
expect(lastCharacter("serendipity "), "y");

// Add 4 more test cases here!
// Be creative with your tests!
// There's an old joke about QA (Quality Assurance) testers:
//
//   “A QA tester walks into a bar. He orders a beer, and then 1000 beers,
//    and then -1 beers, and then "malaise" beers, and then -Infinity beers…”
//
//

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
