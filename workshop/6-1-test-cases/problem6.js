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
  let add = arr[1] + arr[2];
  let sub = arr[1] - arr[2];
  let mult = arr[1] * arr[2];

  if (arr[0] === "add") {
    return add;
  }
  if (arr[0] === "sub") {
    return sub;
  }
  if (arr[0] === "mult") {
    return mult;
  }
  if (arr[0] === "") return undefined;
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["add", 2, 4]), 6);

expect(calculator(["sub", 6, 4]), 2);
expect(calculator(["spoof", 1, 2]), undefined);
expect(calculator(["what", 2, 4]), undefined);
expect(calculator(["add", 5, 5]), 10);
expect(calculator(["sub", 3, 1]), 2);
expect(calculator(["mult", 5, 4]), 20);
expect(calculator(["add", 10, 10]), 20);
expect(calculator(["no more", 0, 1]), undefined);

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
