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

function makeIntoTitle(sentence) {
  // Your code here
  if (typeof sentence !== "string" || sentence === "") {
    return undefined;
  } else {
    let arr = sentence.split(" ");
    return arr.map((el) => capitalize(el)).join(" ");
  }
  function capitalize(word) {
    let letters = word.split("");
    if (letters.length !== 0) {
      letters = letters.map((letter) => letter.toLowerCase());
      letters[0] = letters[0].toUpperCase();
    }
    return letters.join("");
  }
}
// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);
expect(makeIntoTitle("ALL CAPITAL"), "All Capital");
expect(makeIntoTitle("123"), "123");
expect(makeIntoTitle("The black FOX"), "The Black Fox");
expect(makeIntoTitle("oneveryLongword"), "Oneverylongword");
expect(makeIntoTitle("   "), "   ");

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
