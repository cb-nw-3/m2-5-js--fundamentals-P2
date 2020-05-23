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

square(decrement(square(2))
square(decrement(4))
square(3)
9


// Q2
decrement(decrement(square(square(3))));
decrement(decrement(square(9)))
decrement(decrement(81))
decrement(80)




// Q3
duplicateString(reverseString("hello"));
duplicateString("olleh");
("olleh","olleh")



// Q4
reverseString(duplicateString(duplicateString("foo")));
reverseString(duplicateString("foo","foo"));
reverseString("foo","foo","foo","foo");
("oof","oof","oof","oof");
