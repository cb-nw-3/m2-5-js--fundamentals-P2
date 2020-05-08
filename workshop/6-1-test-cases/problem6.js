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

// ONLY 'mult', 'add', 'sub'. NOTHING ELSE. NO.

function validateOp(arr) {
  if (typeof arr != "string" || arr === "") {
    return false;
  }

  switch (arr) {
    case 'mult':
    case 'add':
    case 'sub':
      return true;
      break;
    default:
      return;
  }
}

// gotta be a number. can't be blank. no. no blank.

function validateNum(arg) {
  if (typeof arg != "number" || arg === "") {
    return;
  }
  return true;
}

function calculator(arr) {

  // this is to check if someone just ran it blank, but is there a more elegant solution?

  if (arr === undefined) {
    return;
  }

  if (validateOp(arr[0]) && validateNum(arr[1]) && validateNum(arr[2])) {
    switch (arr[0]) {
      case 'mult':
        return arr[1] * arr[2];
      case 'add':
        return arr[1] + arr[2];
      case 'sub':
        return arr[1] - arr[2];
    }
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);

expect(calculator(['sub', 8, 3]), 5);
expect(calculator(['mult', 2, -9]), -18);
expect(calculator(['dog', 1, 256]), undefined);
expect(calculator([7, 13]), undefined);
expect(calculator(), undefined);
expect(calculator(['add', 90, -45]), 45);

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
