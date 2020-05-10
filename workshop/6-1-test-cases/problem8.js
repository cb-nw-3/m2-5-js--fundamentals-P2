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
  // check if argument is string
  if (typeof str === 'string') {
    // split string in an array of all characters
    let strArr = str.split('');
    // initialize new array
    let newArr = [];
    // initialize new string
    let newStr = '';
    // loop through string in array 
    for (let i = 0; i < str.length; i++) {
      // add the element at beginning
      newArr.unshift(strArr[i]);
    }
    // join the new array to the new string
    newStr = newArr.join('');
    return newStr
  } else {
    return undefined
  }
}

// We need 5 test cases
expect(reverse('asdfasdf'), 'fdsafdsa')
expect(reverse(12341324), undefined)
expect(reverse('1234'), '4321')
expect(reverse('asd ddsa'), 'asdd dsa')
expect(reverse(true), undefined)
expect(reverse(123 + "asd" * 0), undefined)

/*
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
