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
  // Your code here
  if (arr[0] === 'add') {
    return arr[1] + arr[2];
  } else if (arr[0] === 'mult') {
    return arr[1] * arr[2];
  } else if (arr[0] === 'sub') {
    return arr[1] - arr[2];
  } else {
    return undefined
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);
expect(calculator(['sub', 10, 5]), 5);
expect(calculator(['add', -21, 21]), 0);
expect(calculator(['hello', 2, 4]), undefined);
expect(calculator(['mult', 0, 1111]), 0);
expect(calculator(['sub', -15, 100]), -115);
expect(calculator(['add', 1, 1]), 2);


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
