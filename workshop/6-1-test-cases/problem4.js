// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex(["hello", 1]); // e
// getLetterAtIndex(["", 4]);      // undefined
// getLetterAtIndex(["abc", 0]);   // a

/*
1. créer une fonction
2. retourner une position identifier d'un string
3. si la position n'existe pas retourner undefined
*\



/*
  si la position n'existe pas
    retourner undefined
  sinon
    retourner la lettre identifiée.
*/

function getLetterAtIndex(arr) {
  if (!arr[0].charAt(arr[1])) {
    return undefined;
  } else {
    return arr[0].charAt(arr[1]);
  }
}

// Add 6 more test cases
expect(getLetterAtIndex(["hello", 4]), "o");
expect(getLetterAtIndex(["goodbye", 0]), "g");
expect(getLetterAtIndex(["kitkat", 40]), undefined);
expect(getLetterAtIndex(["apple", 2]), "p");
expect(getLetterAtIndex(["StarWars", 8]), undefined);
expect(getLetterAtIndex(["Banana", 5]), "a");

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
