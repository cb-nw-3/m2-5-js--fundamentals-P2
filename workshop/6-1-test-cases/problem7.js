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
  let string = arr[0];
  let multiple = arr[1];

  if (typeof string !== "string" || typeof multiple !== "number")
    return undefined;

  if (multiple < 0) return "";
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["poo", 2], "poopoo"));
expect(repeat(["foo", 4], "foofoofoofoo"));
expect(repeat(["poo", 0], ""));
expect(repeat(["hello", 3], "hellohellohello"));
expect(repeat(["go", -1], ""));
expect(repeat([1, "x"], undefined));
expect(repeat(["yeah!", 2], "yeah!yeah!"));

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
