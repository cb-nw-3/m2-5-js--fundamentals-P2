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
  let operationResult = arr[0];
  switch (operationResult) {
    case "add":
      return arr.slice(1).reduce((prev, next) => prev + next);
    case "sub":
      return arr.slice(1).reduce((prev, next) => prev - next);
    case "mult":
      return arr.slice(1).reduce((prev, next) => prev * next);
    default:
      return undefined;
  }
}
// Step 2
// We need 8 total test cases. The first two are provided.
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["add", 2, 4]), 6);
expect(calculator(["sub", 6, 4]), 2);
expect(calculator(["spoof", 6, 4]), 2);
expect(calculator(["mult", 10, 10]), 100);
expect(calculator(["add", 100, 100]), 1000);
expect(calculator(["add", 100, 100]), 200);
expect(calculator(["sub", 800, 100]), 700);

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
