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

  let result;

  if (arr.length > 3) {
    return undefined;
  }

  switch (arr[0]) {
    case 'add':
      result = arr[1] + arr[2];
      break;
    case 'mult':
      result = arr[1] * arr[2];
      break;
    case 'sub':
        result = arr[1] - arr[2];
        break;
  
    default:
      result = undefined;
  }

  return result
  
  // Your code here
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);
expect(calculator(['spoof', 2, 4]), undefined);
expect(calculator(['add', 2, 4, 7]), undefined);
expect(calculator(['sub', 2, 4]), -2);
expect(calculator(['add', 2.0, 4.6]), 6.6);
expect(calculator(['mult', -2, 1]), -2);
expect(calculator(['add', -2, 100]), 98);


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
