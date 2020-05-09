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
  let str = sentence.split(" ");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let sub = str[i].toLowerCase().substring(1, str[i].length);
    str[i] = str[i].charAt(0).toUpperCase();

    result.push(str[i] + sub);
  }

  return result.join(" ");
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);
expect(
  makeIntoTitle("THE LONGEST ROAD IS A GREAT SONG"),
  "The Longest Road Is A Great Song"
);
expect(
  makeIntoTitle("ThE LoNGeST road IS a grEAt SonG"),
  "The Longest Road Is A Great Song"
);
expect(makeIntoTitle(""), "");
expect(makeIntoTitle("tesT"), "Test");
expect(makeIntoTitle("JavaScript"), "Javascript");
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
