// Problem 10
// ----------
// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string

/*
1. Mettre les string en array
2. Regarder chaque élément du array
3. Modifier le premier caractere pour le mettre en majuscule
4. Mettre le resultat en string
*/

function makeIntoTitle(sentence) {
  let result = "";
  let final = "";
  const myArray = sentence.split(" ");
  for (let index = 0; index < myArray.length; index++) {
    result =
      myArray[index].charAt(0).toUpperCase() +
      myArray[index].slice(1).toLowerCase();
    result = result + " ";
    final = final + result;
  }
  return final.slice(0, -1);
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);
expect(makeIntoTitle("i like movie"), "I Like Movie");
expect(makeIntoTitle("i am funny"), "I Am Funny");
expect(makeIntoTitle("i have a dog"), "I Have A Dog");
expect(makeIntoTitle("hello banana"), "Hello Banana");
expect(makeIntoTitle("whats up coconut"), "Whats Up Coconut");

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
