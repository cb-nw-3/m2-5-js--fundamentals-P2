// let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  // console.log(nums);
  if (nums.length === 0) return undefined;
  
  let sum = 0;

  nums.forEach(each => {
    if (typeof each === 'number') {
      sum += each **2;
    } 
    return;
  });

  console.log(nums);
  return sum;
};

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers('e', 2, 3), 13);
expect(addNumbers(2, true, 3), 13);
expect(addNumbers(-1.1, 1, 1), 3.21);
expect(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9), 285);
expect(addNumbers(-1, -2, -3), 14)
expect(addNumbers('!', 0, -0), 0)
expect(addNumbers(), undefined);

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