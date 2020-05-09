// Problem 6
// ---------
// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

/*
1. Valider que le typeof est un array
2. L'array doit contenir 3 éléments
      le premier élément doit être un string
3. si le string du premier élément dit d'additionner
      retourner la somme des deux chiffres (élément 1-2)
4. si le string du premier élément dit de sub
      retourner la soustration des deux chiffre (éléments 1-2)
5. si le string du premier élément dit de multiplier
      retourner la multiplication des deux chiffre (éléments 1-2)
6. Sinon retourner undefined
*/

// Object = array
function calculator(arr) {
  if (typeof arr === "object") {
    if (arr.length === 3) {
      if (typeof arr[0] === "string") {
        if (arr[0] === "add") {
          return arr[1] + arr[2];
        } else if (arr[0] === "sub") {
          return arr[1] - arr[2];
        } else if (arr[0] === "mult") {
          return arr[1] * arr[2];
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["add", 2, 4]), 6);
expect(calculator(["add", 2, 10]), 12);
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["sub", 2, 4]), -2);
expect(calculator(["sub", 20, 4]), 16);
expect(calculator(["mult", 2, 8]), 16);
expect(calculator(["add", 20, 4]), 24);

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
