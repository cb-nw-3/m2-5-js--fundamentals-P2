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
  if (arr[0] === 'add'){
    return arr[1] + arr[2];
  } else if (arr[0] === 'mult') {
    return arr[1] * arr[2];
  } else if (arr[0] === 'sub') {
    return arr[1] - arr[2];
  } else {
    return undefined;
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);
expect(calculator(['sub', 2, 4]), -2);
expect(calculator(['div', 4, 2]), undefined);
expect(calculator(['add', 0, 0]), 0);
expect(calculator(['mult', 1, 1]), 1);
expect(calculator(['sub', 1, 1]), 0);
expect(calculator(['', 2, 4]), undefined);

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

// answer 2

function calculator2(arr) {
  let total = arr[0];
  switch (total) {
    case 'add':
      return arr.slice(1).reduce((prev, next) => prev + next);
    case 'sub':
      return arr.slice(1).reduce((prev, next) => prev - next);
    case 'mult':
      return arr.slice(1).reduce((prev, next) => prev * next);
    case 'div':
      return arr.slice(1).reduce((prev, next) => prev / next);
    default:
      return undefined;
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator2(['mult', 2, 4]), 8);
expect(calculator2(['add', 2, 4]), 6);
expect(calculator2(['sub', 2, 4]), -2);
expect(calculator2(['div', 4, 2]), 2);
expect(calculator2(['add', 0, 0]), 0);
expect(calculator2(['mult', 1, 1]), 1);
expect(calculator2(['sub', 1, 1]), 0);
expect(calculator2(['', 2, 4]), undefined);

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
