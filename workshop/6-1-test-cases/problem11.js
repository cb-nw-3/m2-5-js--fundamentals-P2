

// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  // console.log(nums);

  //initialize sum value
  

  //check if nums array is empty
  if(nums.length > 0) {
    let sum = 0;
    //for every element in array...
    for(let x=0; x<nums.length;x++){

      //if the element is a number...
      if(typeof(nums[x]) == 'number') {
  
      // console.log(nums[x]);

      //add the squared sum
      sum += nums[x] ** 2;
      }
    }
    //return the square sum total
    console.log(`Total sum squared of ${nums} is ${sum}`);
    return sum;
  }
}

//trying to handle too many scenarios..
function test(...nums) {
  let sum = 0;
  if(nums.length == 0) {return undefined};
  for(let x = 0; x < nums.length; x++) {
    if (typeof(nums[x]) == 'string') {
      let count = 0;
      count ++;
      if(count == nums.length) {
        return undefined;
      }
    } else if (typeof(nums[x]) == 'number') {
      console.log(nums[x]);
      sum += nums[x] ** 2;
    }
  }
  console.log(`Total sum squared of ${nums} is ${sum}`);
  return sum;
}

//solutions modified
function test2(...input) {
  if (input.length === 0) return undefined;
  return input.reduce(
    (acc, curr) => (typeof curr === 'number' ? acc + curr**2 : acc),
    0
  );
}


// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(), undefined); //emtpy arguments
expect(addNumbers(1, 'a', 3), 10); // invalid number, returns 1+3**3 = 10
expect(addNumbers('a', 'b', 'c'), 0); // no numbers
expect(addNumbers(0, 0, 0), 0);
expect(addNumbers([1, 2, 3]), 0);
expect(addNumbers('a', 1, 2), 5);
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
