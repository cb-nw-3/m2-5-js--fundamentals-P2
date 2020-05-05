// Problem 7
// ---------
// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f("foo", 3) // "foofoofoo"
// f("fo", 3) // "fofofo"
// f("foo", -1) // ""

function repeat(arr) {
  if (typeof arr === "object") {
    if (typeof arr[0] === "string" && typeof arr[1] === "number") {
      let newString = "";

      if (arr[1] <= 0) {
        return newString;
      }

      for (let i = 0; i < arr[1]; i++) {
        newString += arr[0];
      }
      return newString;
    }
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["Ha", 4]), "HaHaHaHa");
expect(repeat(["", 4144]), "");
expect(repeat([444, "lel"]), undefined);
expect(repeat(["lul", -4]), "");
expect(repeat("hehe", 4), undefined);
expect(repeat("spagatte", "boulette"), undefined);
expect(repeat(["spagatte", "boulette"]), undefined);

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
