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
    typeof arr[0] === "string" &&
    typeof arr[1] === "number" &&
    typeof arr[2] === "number" &&
    arr.length === 3
  ) {
    switch (arr[0]) {
      case "add":
        return arr[1] + arr[2];
      case "sub":
        return arr[1] - arr[2];
      case "mult":
        return arr[1] * arr[2];
      default:
        return undefined;
    }
  } else return undefined;
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["add", 2, 4]), 6);
expect(calculator(["concat", 9, 5]), undefined);
expect(calculator(["add", "a", "b"]), undefined);
expect(calculator(["add", 9, 25, 35]), undefined);
expect(calculator(["add", 9.3151158547858, 9.4785478811558]), 18.7936637359416);
expect(
  calculator(["mult", 9.3151158547858, 9.4785478811558]),
  88.29377164810074
);
expect(calculator(["sub", 9.3151158547858, 9.4785478811558]), -0.16343202637); //What is the problem here? float decimal count?
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
