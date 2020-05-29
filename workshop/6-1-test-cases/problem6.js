// Problem 6
// ---------
// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function calculator(arr) {
  const operation = arr[0];
  
  switch (operation) {
    case 'add':
      // return the sum of the two other elements of the array
      return arr.slice(1).reduce((el2, el3) => el2 + el3);
    case 'sub':
      // return their difference
      return arr.slice(1).reduce((el2, el3) => el2 - el3);
    case 'mult':
      // return their product
      return arr.slice(1).reduce((el2, el3) => el2 * el3);
    default:
      return undefined;
  }

}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['mult', 0, 0]), 0);
expect(calculator(['mul', 2, 2]), undefined);

expect(calculator(['add', 2, 4]), 6);
expect(calculator(['add', 2.2, 3.3]), 5.5);

expect(calculator(['', -2, 2]), undefined);
expect(calculator(['sub', -2, -4]), 2);

// logic for a string passed isn't implemented!
// expect(calculator(['mult', 2, 's']), "NaN");

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
