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
  return sentence
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);
expect(makeIntoTitle("the amazing grace"), "The Amazing Grace");
expect(
  makeIntoTitle("your friendly neighbour spiderman"),
  "Your Friendly Neighbour Spiderman"
);

expect(makeIntoTitle("the road to success"), "The Road To Success");
expect(makeIntoTitle("how to make money fast"), "How To Make Money Fast");
expect(makeIntoTitle("this is just a farewell"), "This Is Just A Farewell");
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
