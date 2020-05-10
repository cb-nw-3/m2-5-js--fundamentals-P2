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
  let backwards = [];
  let frontwards = [];
  frontwards = str.split('');
  let num = frontwards.length - 1;
  for(i=num; i>=0; i--){
    backwards.push(frontwards[i]);
  }return backwards.join('');
  backwards.length = 0;
}


expect(reverse('hi'), 'ih');
expect(reverse('12345'), '54321');
expect(reverse('donaudampfschiffahrtsgesellschaftskapitaen'),"neatipakstfahcsllesegstrhaffihcsfpmaduanod");
expect(reverse('backwards'), 'sdrawkcab');
expect(reverse('front'), 'tnorf');


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
