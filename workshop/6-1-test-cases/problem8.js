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

/*
1. si c'est un string le mettre en array
2. créer un array vide
3. inverser les character dans le array
4. mettre le array en string
*/

function reverse(str) {
  let result = "";
  for (let index = str.length; index >= 0; index--) {
    result = result + str.charAt(index);
  }
  return result;
}

// We need 5 test cases
expect(reverse("hi"), "ih");
expect(reverse("apple"), "elppa");
expect(reverse("allo"), "olla");
expect(reverse("bye"), "eyb");
expect(reverse("hey"), "yeh");

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
