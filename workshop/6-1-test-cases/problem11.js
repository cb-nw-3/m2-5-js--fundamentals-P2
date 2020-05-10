//let verifyEquals = require("./verify-equals.js");

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

/*
1. Avoir un array et faire la sum au carré de chaque élément
2. si un element du array n'est pas un number
      skip it
3. si on passe rien en parametre
      return undefined
*/

function addNumbers(...nums) {
  let result = 0;
  if (nums.length > 0) {
    for (let index = 0; index < nums.length; index++) {
      if (typeof nums[index] === "number") {
        result = result + nums[index] ** 2;
      }
    }
    return result;
  } else {
    return undefined;
  }
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(2, 3), 13);
expect(addNumbers(1, 2, 3, 4), 30);
expect(addNumbers(5), 25);
expect(addNumbers(), undefined);
expect(addNumbers(8, 2), 68);
expect(addNumbers("banana", 3, 4), 25);
expect(addNumbers(10, 4), 116);

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
