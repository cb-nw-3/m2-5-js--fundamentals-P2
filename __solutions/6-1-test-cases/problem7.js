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

function f(arr) {
  const str = arr[0];
  const count = arr[1];

  if (typeof str !== 'string' || typeof count !== 'number')
    return undefined;

  if (count <= 0) return '';

  let res = '';

  for (let i = 0; i < count; i++) {
    res = res + str;
  }
  return res;
}
