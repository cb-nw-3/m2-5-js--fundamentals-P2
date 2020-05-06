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
  let newString = '';

  for (let x = str.length - 1; x >= 0; x--){
    newString += str[x];
  }
  return newString;
}

// We need 5 test cases
expect(reverse('Hello'), 'olleH');
expect(reverse('hi'), 'ih');
expect(reverse(''), '');
expect(reverse('34'), '43');
expect(reverse('Car'), 'raC');
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


// Answer 2

function reverse2(str) {
  // Your code here
  if (str === "") {
    return "";
  } else {
    return reverse2(str.substr(1)) + str.charAt(0);
  }
}

// We need 5 test cases
expect(reverse2('Hello'), 'olleH');
expect(reverse2('hi'), 'ih');
expect(reverse2(''), '');
expect(reverse2('34'), '43');
expect(reverse2('Car'), 'raC');
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