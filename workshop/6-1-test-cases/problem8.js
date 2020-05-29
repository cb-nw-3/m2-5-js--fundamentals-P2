// Problem 8
// ---------
// Write a function that returns the input string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
//
// You are NOT ALLOWED to use the `reverse` method.
// You must use a loop of some kind (for, while, forEach, map, etc)
//
// HINT (one possible approach):
//  - Split your string into an array of characters
//  - Create an empty array
//  - Loop over the array of split characters in reverse order and fill the
//    empty array by pushing each character into it
//  - Convert the filled array into a string (use the join method) and return it

function reverse(str) {
  
  // Split your string into an array of characters
  let letterArray = str.split('');

  // Get the array length to get how  many loop to do
  let letterArrayLength = letterArray.length;
  // console.log(letterArrayLength);

  // Create an empty array
  let newArr = [];

  // Loop over the array of split characters in reverse order 
  for (let i = letterArrayLength; i > 0; i--) {
    // fill the empty array by pushing each character into it
    // console.log('I loop here ' + i);
    newArr.push(letterArray[i - 1]);
  }

  // console.log(newArr);
  // join individual string char into a single string
  return newArr.join('');  
}

// We need 5 test cases
expect(reverse('hello'), 'olleh');
expect(reverse('how are you'), 'uoy era woh');
expect(reverse('1234'), '4321');
expect(reverse('Some Special cHar!!!'), '!!!raHc laicepS emoS');
expect(reverse(' '), ' ');


/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(
      `⛔️ Expected “${result}” to equal “${value}”`
    );
  }
}