// Problem 3
// ---------
// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

/*
1. avoir 2 chiffres/nombres dans mon array
2. les arrays doivent contenir des number
3. si les arrays ne contiennent pas des number retourner undefined
4. si les array contiennent des number retourner l'addition
5. si les array contiennent plus de 2 chiffres on doit retourner undefined.
*/

/*
si mon array a 2 chiffres
  si l'array ne contient pas 2 chiffres (donc un string ou autres)
    undefined
  sinon 
    retourner l'addition
sinon 
  undefined
*/

function sumDigits(input) {
  if (input.length === 2) {
    if (typeof input[0] !== "number" || typeof input[1] !== "number") {
      return undefined;
    } else {
      return input[0] + input[1];
    }
  } else {
    return undefined;
  }
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits(["cake", 4]), undefined);
expect(sumDigits([-1, 8, 2]), undefined);
expect(sumDigits([-1, 6]), 5);
expect(sumDigits([6, 12]), 18);
expect(sumDigits(["", 5]), undefined);

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
