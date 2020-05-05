// Given the following functions, answer the questions below.

function square(x) {
  return x * x;
}

function decrement(x) {
  return x - 1;
}

function duplicateString(x) {
  return x.concat(x);
}

function reverseString(str) {
  const splitString = str.split(""); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
}

// Expand each of the following and get the result of the expression
// Q1
square(decrement(square(decrement(3))));

square(decrement(square(2))); //decrement(3) === 2

square(decrement(4)); //square(2) === 4

square(3); //decrement(4) === 3

9; //square(3) === 9

// Q2
decrement(decrement(square(square(3))));

decrement(decrement(square(9))); //square(3) === 9

decrement(decrement(81)); //square(9) === 81

decrement(80); //decrement(81) === 80

79; //decrement(80) === 79

// Q3
duplicateString(reverseString("hello"));

duplicateString("olleh"); //reverseString("hello") === "olleh"

("olleholleh"); //duplicateString("olleh") === "olleholleh"

// Q4
reverseString(duplicateString(duplicateString("foo")));

reverseString(duplicateString("foofoo")); //duplicateString("foo") === "foofoo"

reverseString("foofoofoofoo"); //duplicateString("foofoo") === "foofoofoofoo"

("oofoofoofoof"); //duplicateString("foofoofoofoo") === "oofoofoofoof"
