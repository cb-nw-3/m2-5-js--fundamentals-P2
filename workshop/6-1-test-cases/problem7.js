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
  if (
    typeof arr[0] !== "string" ||
    typeof arr[1] !== "number" ||
    typeof arr !== "object" ||
    arr.length !== 2
  ) {
    return undefined;
  } else if (arr[1] <= 0) {
    return "";
  } else {
    let str = "";
    for (let i = 0; i < arr[1]; i++) {
      str += `${arr[0]}`;
    }
    return str;
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["blah", 3]), "blahblahblah");
expect(repeat(["blah", 0]), "");
expect(repeat(["blah", 3, 2]), undefined);
expect(repeat(["orange", 1]), "orange");
expect(repeat([123, 3]), undefined);
expect(repeat(["", 3]), "");
expect(repeat([["blah", "blah2"], 3]), undefined);

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
