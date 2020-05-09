// Problem 7
// ---------
// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (typeof arr !== "object" || arr.length !== 2) return undefined;
  if (typeof arr[0] !== "string" || typeof arr[1] !== "number")
    return undefined;
  if (arr[1] <= 0) return "";

  let repeatedstring = "";
  for (let i = 0; i < arr[1]; i++) {
    repeatedstring += arr[0];
  }

  return repeatedstring;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["hello", 5]), "hellohellohellohellohello");
expect(repeat("Array"), undefined);
expect(repeat([true, 1]), undefined);
expect(repeat(["hello", "3"]), undefined);
expect(repeat(["hello"]), undefined);
expect(repeat(["hello", 3, 4]), undefined);
expect(repeat(["world", 2]), "worldworld");
expect(repeat(["world", 0]), "");

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
