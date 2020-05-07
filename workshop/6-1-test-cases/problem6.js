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
  if (
    arr.length !== 3 ||
    typeof arr[1] !== "number" ||
    typeof arr[2] !== "number"
  ) {
    return undefined;
  } else {
    let operation = arr[0];
    switch (operation) {
      case "add":
        return arr[1] + arr[2];
        break;
      case "mult":
        return arr[1] * arr[2];
        break;
      case "sub":
        return arr[1] - arr[2];
      default:
        return undefined;
    }
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["add", 2, 4]), 6);
expect(calculator(["sub", 2, 4, 5]), undefined);
expect(calculator(["div", 2, 4]), undefined);
expect(calculator([123, 2, 4]), undefined);
expect(calculator(["", 2, 4]), undefined);
expect(calculator(["sub", 4, 4]), 0);
expect(calculator(["mult", [2, 4], 1]), undefined);

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
