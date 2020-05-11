//let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {

    let squaredNumsTotal = 0;

    if (nums.length === 0) {
      return undefined
    }

    let addedAtLeastOneNumber = false;

    nums.forEach(
      function (element) { 
        if (Number.isFinite(element)) {
          //console.log((element*element).toFixed(2));
          squaredNumsTotal = squaredNumsTotal + (element*element);
          addedAtLeastOneNumber = true;
        }
      }
    );

    if (addedAtLeastOneNumber) {
      return squaredNumsTotal;
    } else { 
      return undefined;
    }
    
}

//Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(), undefined); 
expect(addNumbers(1, 1, 1), 3); 
expect(addNumbers(1, 'two', 3), 10); 
expect(addNumbers(1, '2', 3), 10); 
expect(addNumbers(1, 1.1, 3), 11.21); // 1 + 1.32 + 9
expect(addNumbers(1, 1, 1, 20), 403); // 1 + 1.32 + 9
expect(addNumbers("one", "two"), undefined); // 1 + 1.32 + 9





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
