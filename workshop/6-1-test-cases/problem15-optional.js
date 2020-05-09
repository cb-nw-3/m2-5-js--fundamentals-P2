// Problem 12
// ----------
// Make this function return the number of elements that are unique to array1
// and array2.
// An element is unique if it only appears in one of the arrays.
// It is allowed to appear multiple times in the same array.
//
// If there are no unique elements return an empty array.
// If the inputs are anything other than arrays, return undefined.

// For example:
// uniqueElements([0,1,2,3], [1,3,4,5]); // [0,2,4,5]
// uniqueElements([1,2,3], [3,2,1]); // []
// uniqueElements(2); // undefined, not an array

// HINTS:
//   - You'll need to do a nested iteration, to compare every item in array 1
//     to every item in array 2
//   - You will need to run your logic 2 times, flipping the order:
//     - Once to get the unique elements in the first array
//     - A second time to get the unique elements in the second array
//
// THIS IS A VERY HARD PROBLEM.
// If you struggle with it, set it aside. In a few weeks, you might find the
// solution comes more quickly :)

function uniqueElements(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return undefined;
  }
  let resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      resultArr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) < 0) {
      resultArr.push(arr2[j]);
    }
  }
  return resultArr.join("");
}

// Add 5 test cases
expect(uniqueElements([0, 2, 5, 6], [1, 2, 4, 6]), [0, 5, 1, 4].join(""));
expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5]), [0, 2, 4, 5].join(""));
expect(uniqueElements([1, 2, 3], [3, 2, 1]), [].join(""));
expect(
  uniqueElements([1, 2, 3, 4, 5], [6, 7, 8]),
  [1, 2, 3, 4, 5, 6, 7, 8].join("")
);
expect(uniqueElements(2), undefined);

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
