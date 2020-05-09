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
  // Your code here
  let reversed = '';
  if (typeof str !== 'string') {
    return undefined
  } else {
    for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
    }
    return reversed;
  }
}

// We need 5 test cases
expect(reverse('hello'), 'olleh')
expect(reverse('my name is:'), ':si eman ym')
expect(reverse(15), undefined)
expect(reverse(':si ega ym'), 'my age is:')
expect(reverse('test'), 'tset')

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
