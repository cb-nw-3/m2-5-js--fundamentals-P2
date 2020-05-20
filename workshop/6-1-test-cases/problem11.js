// let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {

  if (nums.length === 0){
    return undefined;
  } else {
    let sum = 0;
    let tic = 0;
    for(let i = 0; i <= nums.length - 1; i ++){
      if (typeof nums[i] !== "number"){
      } else {
        sum = sum + nums[i]**2;
        tic++;
      }
    }
    if (tic === 0){
      return undefined;
    } else {
      return sum;
    }
  }
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(6), 36);
expect(addNumbers(2, 0), 4);
expect(addNumbers(), undefined);
expect(addNumbers(true, "Hi", 2), 4);
expect(addNumbers(-1, -2), 5);
expect(addNumbers("Bacon", "Hello", true), undefined);
expect(addNumbers(-1, Infinity), Infinity);


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
