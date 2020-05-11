// let verifyEquals = require("../../assets/verify-equals");

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
  let wordArr = sentence.split(" ");
  let resultArr = [];

  for (i = 0; i < wordArr.length; i++) {
    let letterArr = wordArr[i].split("");
    letterArr[0] = letterArr[0].toUpperCase();
    resultArr.push(letterArr.join(""));
  }
  return resultArr.join(" ");
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);
expect(makeIntoTitle("what's up doc"), "What's Up Doc");
expect(makeIntoTitle("awesome possum"), "Awesome Possum");
expect(makeIntoTitle("Cool Beans"), "Cool Beans");
expect(makeIntoTitle("other"), "Other");
expect(
  makeIntoTitle("i think we pretty much got this now"),
  "I Think We Pretty Much Got This Now"
);

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
