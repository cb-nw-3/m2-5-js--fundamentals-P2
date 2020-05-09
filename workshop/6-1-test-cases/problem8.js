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
  if (str === "") {
    return;
  } else if (typeof str !== "string") {
    return;
  }

  // this still feels inelegant. There's got to be a more compact solution.
  // On the other hand, it fits the brief. So.
  
  let newStringArr = str.split('');
  let reversedString = [];
  newStringArr.forEach(function (item) {
    reversedString.unshift(item);
  })
  return reversedString.join('');
}

// We need 5 test cases

expect(reverse("flip"), "pilf");
expect(reverse("string test"), "tset gnirts");
expect(reverse(), undefined);
expect(reverse(321), undefined);
expect(reverse(["foo"]), undefined);


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
