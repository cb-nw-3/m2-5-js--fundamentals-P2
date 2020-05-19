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
  if (typeof(arr[0]) !== "string" || typeof(arr[1]) !== "number"){
    return undefined;
  } else if (arr[1] <= 0) {
    return "";
  } else {
    let str = "";
    for (let i = 1; i <= arr[1]; i++){
      str = str + arr[0];
    }
    return str;
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["oompa loompa ", 2]), "oompa loompa oompa loompa ");
expect(repeat(["oompa loompa ", 1]), "oompa loompa ");
expect(repeat(["oompa loompa ", 0]), "");
expect(repeat(["oompa loompa ", -1]), "");
expect(repeat(["", 1]), "");
expect(repeat(["oompa loompa ", "two"]), undefined);
expect(repeat([32, 1]), undefined);





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
