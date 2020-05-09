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

function verifyStr(input) {
  if (typeof input !== "string") {
    return;
  }
  return true;
}

function verifyNum(input) {
  if (typeof input !== "number") {
    return;
  }
  return true;
}

function repeat(arr) {
  if (Array.isArray(arr) !== true) {
    return;
  } else if (arr[1] <= "0") {
    return "";
  } else if (verifyStr(arr[0]) && verifyNum(arr[1])) {
    return (arr[0].repeat(arr[1]));
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["foo", 3]), "foofoofoo");
expect(repeat(["3", 9]), "333333333");
expect(repeat(["what", -1]), "");
expect(repeat(["something", 0]), "");
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
