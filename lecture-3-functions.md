# 2.5.3 - JS More Fundamentals - Functions

---

Functions are a Fundamental building block of JavaScript.

Functions _encapsulate_ a particular task.

---

## Function Parameters and Arguments

---

### A parameter

is a variable in function, or method, definition.

```js
// Example
```

---

### An argument

is the value given to the parameter when a function, or method is called.

```js
// Example
```

---

What is the output of this function?

```js
function f() {
  console.log('hello');
}

f('bye');
```

---

--> Extra arguments are ignored.

---

### Extra arguments vs missing arguments

- Calling a function with extra arguments
  - Never useful
  - Usually an indication of a bug
- Calling a function with fewer arguments
  - Sometimes useful
  - But could also be a mistake

---

## What a function `returns`

```js
// Example
function foodItem() {
  return 'bacon';
}

console.log(someFunc());
```

---

### _Defining_ a function

This is how we have been _defining_ (and declaring) functions up-to-now

```js
function someFunc() {
  // do something...
}
```

---

There are 2 other ways to _define_ a function

```js
const someFunc = function () {
  // do something...
};
```

This will _define_ a function expression.

⚠️ **Function expressions are NOT hoisted.**

---

The third way is an arrow function

```js
const someFunc = () => {
  // do something...
};
```

This is equivalent to the previous way of _defining_ a function.

⚠️ **It is NOT hoisted either.**

---

### Optional Parens and Implicit Returns

Arrow functions have a couple tricks up their sleeve:

```js
// This is one way to define an arrow function:
let add5 = (number) => {
  return number + 5;
};

// This is another way:
let add10 = (number) => number + 10;
```

---

To keep life simpler, I recommend always using parens and the `return` keyword.

Just be aware of the shorter syntax, in case you encounter it in the wild.

---

# Which function when?

_In general_, you can use them interchangeably.

For all of the code we've seen so far, there's no difference.

In a couple lectures, we'll see what the distinction is.

---

[Next lecture: Rest Spread](../lecture-4-rest-spread)
