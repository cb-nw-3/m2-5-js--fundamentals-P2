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

let a = decrement(3);
let b = square(a);
let c = decrement(b);
let d = square(c);

console.log("d: ", d);

// Q2
decrement(decrement(square(square(3))));

let e = square(3);
let f = square(e);
let g = decrement(f);
let h = decrement(g);

console.log("h: ", h);
// Q3
duplicateString(reverseString("hello"));

let i = reverseString("hello");
let j = duplicateString(i);

console.log("j: ", j);

// Q4
reverseString(duplicateString(duplicateString("foo")));

let k = duplicateString("foo");
let l = duplicateString(k);
let m = reverseString(l);

console.log("m: ", m);
