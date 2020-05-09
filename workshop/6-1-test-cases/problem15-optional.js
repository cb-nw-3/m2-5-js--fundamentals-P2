// Problem 15 that before was 12
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

function uniqueElements(input1, input2) {
  // Your code here
  if (Array.isArray(input1) && Array.isArray(input2)) {
    let result = [];
    for (let i = 0; i < input1.length; i++) {
      let checkpoint = false;
      for (let j = 0; j < input2.length; j++) {
        if (input1[i] === input2[j]) {
          checkpoint = true;
        }
      }
      if (!checkpoint) {
        result.push(input1[i]);
      }
    }
    for (let i = 0; i < input2.length; i++) {
      let checkpoint = false;
      for (let j = 0; j < input1.length; j++) {
        if (input2[i] === input1[j]) {
          checkpoint = true;
        }
      }
      if (!checkpoint) {
        result.push(input2[i]);
      }
    }
    return result.sort((a, b) => a - b);
  }
  return undefined;
}

// Add 5 test cases

expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5]), [0, 2, 4, 5]);
expect(uniqueElements([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]), [
  0,
  2,
  4,
  6,
  8,
  10,
]);
expect(uniqueElements([1, 3, 5, 7, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [
  0,
  2,
  4,
  6,
  8,
  10,
]);
expect(uniqueElements([0, 1, 3, 5, 7, 9], [0, 1, 2, 4, 5, 6, 7, 8, 9, 10]), [
  2,
  3,
  4,
  6,
  8,
  10,
]);
expect(uniqueElements([0, 1, 2, 4, 5, 6, 7, 8, 9, 10], [0, 1, 3, 5, 7, 9]), [
  2,
  3,
  4,
  6,
  8,
  10,
]);
expect(
  uniqueElements([5, , 90, 2, 4, 0, 6, 7, 8, 9, 10, 1], [21, 0, 1, 3, 5, 7, 9]),
  [2, 3, 4, 6, 8, 10, 21, 90]
);
expect(
  uniqueElements(
    [5, "B", 90, 2, 4, 0, 6, 7, 8, 9, 10, 1],
    [21, 0, 1, 3, 5, 7, 9]
  ),
  ["B", 2, 3, 4, 6, 8, 10, 21, 90]
);

expect(
  uniqueElements(
    [5, "B", 90, 2, 4, 0, 6, 7, 8, 9, 10, 1],
    [21, 0, "B", 1, 3, 5, 7, 9]
  ),
  [2, 3, 4, 6, 8, 10, 21, 90]
);
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  resultToString = result.join("");
  valueToString = value.join("");
  if (resultToString === valueToString) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
