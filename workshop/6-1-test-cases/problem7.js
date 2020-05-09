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
  // Your code here
  if (
    typeof arr[0] === "string" &&
    typeof arr[1] === "number" &&
    arr.length === 2
  ) {
    let result = "";
    for (let i = 1; i <= arr[1]; i++) {
      result = result.concat(arr[0]);
    }
    return result;
  } else undefined;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["Mari", 4]), "MariMariMariMari");
expect(repeat([4, "Mari"]), undefined);
expect(repeat(["hi"]), undefined);
expect(repeat(["452", 3]), "452452452");
expect(repeat(["Mari", 0]), "");
expect(repeat(["Mari", -12]), "");
expect(repeat([2, "Mari", -12]), undefined);

/* -------------------------------------------------------------------
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
