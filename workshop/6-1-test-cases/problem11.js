// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addSquares(...nums) {
  nums = nums.filter((num) => {
    return typeof num === "number";
  });
  nums = nums.map((num) => {
    return num * num;
  });
  return nums.reduce((acc, current) => {
    return acc + current;
  });
}

// Insert missing solution please

// // Add 7 more test cases.

expect(addSquares(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addSquares(6, 10, 12), 280);
expect(addSquares(12, 16, 18), 724);
expect(addSquares(12, 16, 26), 1076);
expect(addSquares(30, 32, 34), 3080);
expect(addSquares(60, 66, 70), 12856);
expect(addSquares(70, 72, 74), 15560);
//  * -------------------------------------------------------------------
//  * ⚠️ No changes necessary below. ⚠️
//  * -------------------------------------------------------------------
//  */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
