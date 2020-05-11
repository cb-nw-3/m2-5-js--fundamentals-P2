// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  if (input.length != 2)
  {
    return undefined;
  }
  let total = 0;

  let containsNonNumbers = false;



  input.forEach( 
      function (element) {
        // console.log(element);
        // console.log(typeof(element));
        if (typeof(element) === 'number') {
          total = total + element;
          // console.log('is number')
        } else {
          // console.log('is not number')
          containsNonNumbers = true;        
        }
      });

     
      if (containsNonNumbers)
      {
        return undefined;
      }
      else
      {
        return total;
      }

}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([99, 1]), 100);
expect(sumDigits(["dave", 0]), undefined);
expect(sumDigits([-1, 0, 3]), undefined);
expect(sumDigits([1]), undefined);

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
