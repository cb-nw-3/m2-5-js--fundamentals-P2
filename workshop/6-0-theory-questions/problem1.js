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
decrement(3) = 2;
square(2) = 4;
decrement(4) = 3;
square(3) = 9;

// Q2
decrement(decrement(square(square(3))));
square(3) = 9;
square(9) = 81;
decrement(81) = 80;
decrement(80) = 79;

// Q3
duplicateString(reverseString("hello"));
reverseString("hello") = olleh;
duplicateString("olleh") = olleholleh;

// Q4
reverseString(duplicateString(duplicateString("foo")));
duplicateString("foo") = foofoo;
duplicateString("foofoo") = foofoofoofoo;
reverseString("foofoofoofoo") = oofoofoofoof;
