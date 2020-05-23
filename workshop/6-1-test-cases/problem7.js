// Problem 7
function accumulatorWords(arr) {
  const [str,repeat] = arr;
 
  if (typeof str !== "string" || typeof repeat !== "number") return undefined;

  if (repeat <= 0) return "";

  let res = "";

  for (let i = 0; i < repeat; i++) {
    res += str ;
  }
  return res;
}





expect(accumulatorWords(["fo", 3]), "fofofo"); 

expect(accumulatorWords(["foo", 3]), "foofoofoo");
expect(accumulatorWords(["foo", 0]), "");
expect(accumulatorWords(["hi", 4]), "hihihihi");
expect(accumulatorWords(["hi", "there"]), "hithere");
expect(accumulatorWords(["ga", 4]), "gagagaga");
expect(accumulatorWords(["beat", 2]), "beatbeat");

// We need 7 test cases.
// Don't forget to test all of the question parameters

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
