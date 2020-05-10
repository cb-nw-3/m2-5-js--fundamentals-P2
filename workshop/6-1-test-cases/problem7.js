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

/*
1. Le premier élément du arr[0] = string
2. Le deuxième élément du arr [1] = number
3. répeter le arr [0] par le nombre du arr [1]
4. si le arr [1] est négatif ou 0
      retourner un string vide
5. si le arr ne respecte pas l'ordre [string, number]
      retourner undefined
*/

function repeat(arr) {
  if (typeof arr[0] === "string" && typeof arr[1] === "number") {
    if (arr[1] <= 0) {
      return "";
    } else {
      let result = "";
      for (let index = 0; index < arr[1]; index++) {
        result = result + arr[0];
      }
      console.log(result);
      return result;
    }
  } else {
    return undefined;
  }
}

// We need 7 test cases.
expect(repeat(["apple", 2]), "appleapple");
expect(repeat(["a", 3]), "aaa");
expect(repeat(["f", 5]), "fffff");
expect(repeat([2, 2]), undefined);
expect(repeat([3, "n"]), undefined);
expect(repeat(["z", -1]), "");
expect(repeat(["apple", 0]), "");

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
