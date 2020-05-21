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

function capitaliseFirstLetter(item) {
  return item.charAt(0).toUpperCase() + item.substring(1);
}

function makeIntoTitle(sentence) {
  if (sentence === "" || typeof sentence !== "string") {
    return undefined;
  } else {
    let arr = sentence.toLowerCase().split(" ");
    let capitalisedArray = arr.map(function (word) {
      return capitaliseFirstLetter(word);
    });
    return capitalisedArray.join(" ");
  }
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);

expect(makeIntoTitle("ALL YOUR BASE ARE BELONG"), "All Your Base Are Belong");
expect(makeIntoTitle(""), undefined);
expect(makeIntoTitle(989122333), undefined);
expect(
  makeIntoTitle(["the", "longest", "road", "is", "a", "great", "song"]),
  undefined
);
expect(makeIntoTitle("i'M a lITtlE teA p0t"), "I'm A Little Tea P0t");

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
