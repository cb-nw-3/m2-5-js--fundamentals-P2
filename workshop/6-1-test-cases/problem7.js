// Problem 7
function f(arr) {
  const str = arr[0];
  const count = arr[1];

  if (typeof str !== "string" || typeof count !== "number") return undefined;

  if (count <= 0) return "";

  let res = "";

  for (let i = 0; i < count; i++) {
    res = res + str;
  }
  return res;
}

// function fooFoo(arr) {
//   let stringBeAt = arr[0];
//   let countBeAt = arr[1];
//   if (typeof stringBeAt !== "string" || typeof CountBeAt !== "number")
//     return undefined;
//   if (countBeAt <= 0) return "";
//   let res = "";
//   // WHAT IS THIS ABOVE
//   for (let i = 0; i < countBeAt; i++) {
//     res = res + stringBeAt;
//   }
//   return res;
// }

// f(["foo", 3]), "foofoofoo";
f(["fo", 3], "fofofo"); // "fofofo"
// f(["foo", -1]) // ""
// f(["foo", 0]) // ""

// function fooFoo(arr) {
//   let str = arr[0];
//   // - The function input is an array.
//   const count = arr[1];
//   if (typeof str !== "string" || typeof count !== "number") return undefined;
//   // - The first element of the array is a string. The second is a number.
//   if (count <= 0) return "";
//   // If any invalid parameters are supplied return undefined.
//   let res = "";
//   // - If a negative number or zero is specified, return an empty string.
//   for (let i = 0; i < count; i++) {
//     res = res + str;
//     // - Make this function return the string repeated as many times as specified by the second element of the array.
//   }
//   return res;
// }

// We need 7 test cases.
// Don't forget to test all of the question parameters

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
