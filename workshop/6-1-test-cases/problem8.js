// Problem 8
// ---------
// Write a function that returns the input string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
//
// You are NOT ALLOWED to use the `reverse` method.
// You must use a loop of some kind (for, while, forEach, map, etc)
//
// HINT (one possible approach):
//  - Split your string into an array of characters
//  - Create an empty array
//  - Loop over the array of split characters in reverse order and fill the
//    empty array by pushing each character into it
//  - Convert the filled array into a string (use the join method) and return it

function reverse(str) {
  if (str === "" || str === undefined) {
    return undefined;
  } else {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed = reversed + str[i];
    }
    return reversed;
  }
}

// We need 5 test cases
expect(reverse("Hello"), "olleH");
expect(reverse("H"), "H");
expect(reverse("9"), "9");
expect(reverse("69bulc"), "club96");
expect(reverse(), "undefined");

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
