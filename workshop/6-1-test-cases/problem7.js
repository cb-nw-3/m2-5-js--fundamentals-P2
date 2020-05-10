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
  if (arr[1] <= 0) {
    return "";
  } else if (isNaN(arr[1])) {
    return undefined;
  } else {
    let i = 0;
    let str = "";
    while (i < arr[1]) {
      str = str.concat(arr[0]);
      i++;
    }
    return str;
  }
}

expect(repeat(["foo", 3]), "foofoofoo");
expect(repeat(["john", 6]), "johnjohnjohnjohnjohnjohn");
expect(repeat(["joy", 1]), "joy");
expect(repeat(["joy", 0]), "");
expect(repeat(["joy", -5]), "");
expect(repeat(["joy", "mike"]), undefined);
expect(repeat(["joy", "⛔"]), undefined);
expect(repeat(["cake", 4]), "cakecakecakecake");
expect(repeat(["johnny", 7]), "johnnyjohnnyjohnnyjohnnyjohnnyjohnnyjohnny");

// We need 7 test cases.
// Don't forget to test all of the question parameters

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
