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
  if (typeof arr !== "object" || arr.length < 3) return undefined;
  let operations = ["add", "sub", "mult"];
  if (typeof arr[0] !== "string" || !operations.includes(arr[0]))
    return undefined;
  let operation = arr.splice(0, 1);
  let validNumArray = arr.every((item) => typeof item === "number");
  if (!validNumArray) return undefined;

  return arr.reduce((a, b) => {
    switch (operation[0]) {
      case "add": {
        return a + b;
      }
      case "sub": {
        return a - b;
      }
      case "mult": {
        return a * b;
      }
      default:
        return 0;
    }
  });
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["add", 2, 4]), 6);
expect(calculator(["sub", 2, 4]), -2);
expect(calculator(["invalid", 2, 4]), undefined);
expect(calculator(["add", 2, 4, 6]), 12);
expect(calculator(["add", true, 4, 6]), undefined);
expect(calculator(["add", 1, 4, 6, 100]), 111);
expect(calculator(["mult", 4]), undefined);

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
