// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  if (nums == "") {
    return;
  }
  let totalSum = 0;
  let numCheck = nums.length;
  let numCounter = 0;
  nums.forEach(function (num) {
    if (typeof num === "number") {
      totalSum += num ** 2;
      numCounter++;
    }
  });
  return totalSum;
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14

expect(addNumbers(1, 2, 3, "bean"), 14);
expect(addNumbers(), undefined);
expect(addNumbers(7, 8, 9, 10, 12), 438);
expect(addNumbers([1, 2, 3]), 0);
expect(addNumbers("what"), 0);
expect(addNumbers("a", "b", "c"), 0);
expect(addNumbers(-1, -2, -3), 14);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
