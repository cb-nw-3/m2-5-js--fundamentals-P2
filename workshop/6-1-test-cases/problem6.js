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
  // check if argument is an array of 3 and two numbers
  if (
    arr.length === 3 && 
    typeof arr[1] === 'number' && 
    typeof arr[2] === 'number'
  ) {
    // return different operation depending on string
    switch (arr[0]) {
      case 'add':
        return arr[1] + arr[2];
      case 'sub':
        return arr[1] - arr[2];
      case 'mult':
        return arr[1] * arr[2];
      default:
        return undefined
    }
  } else {
    return undefined
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);
expect(calculator(['addd', 2, 4]), undefined);
expect(calculator(['spoof', 2, 4]), undefined);
expect(calculator(['sub', 2, 4]), -2);
expect(calculator(['add', 4]), undefined);
expect(calculator(['mult', "s", 4]), undefined);
expect(calculator(['sub', "s", 4]), undefined);
expect(calculator(['add', "s", 4]), undefined);
expect(calculator(['add', -2, 4]), 2);
expect(calculator(['mult', -2, -4]), 8);
expect(calculator('add', 2, 4), undefined);
expect(calculator(['mu1t', 2, 4]), undefined);
expect(calculator(['ADD', 2, 4]), undefined);

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
