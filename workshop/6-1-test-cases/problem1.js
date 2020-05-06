// Problem 1
// ---------
// Step 1
// Write a function that returns the first character of the string that is
// passed to it.
// If it's an empty string (''), return undefined.

function firstLetter(str) {
  let arr = str.split("");
  let firstLetter = arr[0];
  if (firstLetter === "") {
    return undefined;
  } else {
    return firstLetter;
  }
}

// Step 2
// We need 5 test cases. The first input is provided.
// Don't forget to test all of the question parameters

expect(firstLetter("max"), "m");
expect(firstLetter("bacon"), "b");
expect(firstLetter("Zebra"), "Z");
expect(firstLetter("lion"), "l");
expect(firstLetter(""), undefined);

// Step 3
// Run this file with Node.
// When all the tests pass, move on to the next problem

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
