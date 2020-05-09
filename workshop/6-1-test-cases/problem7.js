// Problem 7
// ---------
// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  let string = arr[0]
  let repeatNum = arr[1]
  if(arr[1] < 0 || typeof arr[1] !== 'number'){
    return undefined
  }
  if(arr[0] === ''){
    return undefined
  }
  if(arr.length !== 2){
    return undefined
  }
  if(typeof arr[0] !== 'string'){
    return undefined
  }
  let total = ''
  for(i = 0; i < repeatNum; i++){
    total = total + string
  }
  return total
}

expect(repeat(['do', 4]), 'dodododo')
expect(repeat(['fada', 2]), 'fadafada')
expect(repeat([3,4]), undefined)
expect(repeat (['dog', -3]),undefined)
expect(repeat ('dog', 3, 4), undefined)
expect(repeat(['',5]), undefined)
expect(repeat(['slo','flow']), undefined)
// We need 7 test cases.
// Don't forget to test all of the question parameters

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
