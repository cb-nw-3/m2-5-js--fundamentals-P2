// let verifyEquals = require('../../assets/verify-equals');

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
  let result = arr[0];
  if (arr[1] < 1) {
    return "";
  } else {
    for (i = 0; i < arr[1] - 1; i++) {
      result += arr[0];
    }
    return result;
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["thing", 2]), "thingthing");
expect(repeat(["other", 5]), "otherotherotherotherother");
expect(repeat(["coronavirus", -3]), "");
expect(repeat(["boredom", 0]), "");
expect(repeat(["", 2]), "");
expect(repeat(["one", 4]), "oneoneoneone");

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
