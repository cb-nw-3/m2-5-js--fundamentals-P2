// Problem 7
// ---------
// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f("foo", 3) // "foofoofoo"
// f("fo", 3) // "fofofo"
// f("foo", -1) // ""

function repeat(arr) {
  // Your code here
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat("foo", 3), "foofoofoo");
expect(repeat("3", 9), "333333333");
expect(repeat("what", -1), "");
expect(repeat(9), undefined);
expect(repeat(), undefined);
expect(repeat(3, 3), undefined);
expect(repeat({}), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(
      `⛔️ Expected “${result}” to equal “${value}”`
    );
  }
}
