// let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  let total = 0;
  if (nums.length === 0){
    return undefined
  }
  nums.forEach(function (item){
    if(typeof item === 'number'){
      return total = total + item ** 2
    }
    
  })
  return total
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14)
expect(addNumbers(1, 2,"dog", 3), 14)
expect(addNumbers(), undefined)
expect(addNumbers('dog'), 0)
expect(addNumbers(2,2), 8)
expect(addNumbers('cat', 'cat', 'cat'), 0)
expect(addNumbers('cat', 3), 9)
expect(addNumbers(-2), 4)
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
