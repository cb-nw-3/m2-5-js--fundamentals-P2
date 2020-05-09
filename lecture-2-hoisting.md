# 2.5.2 - Hoisting

---

"Hoisting" refers to the fact that in Javascript, certain kinds of things are evaluated "out of order".

---

When you define a function with the `function` keyword, it is hoisted to the top.

---

```js
hello();

function hello() {
  console.log('hi!');
}
```

---

How about variables?

---

```js
// what will output to the console?
console.log(greeting);
let greeting = 'Hello';

// a. 'Hello'
// b. undefined
// c. Uncaught ReferenceError: greeting is not defined
```

---

`var` is "half-hoisted". But since we aren't learning `var`, we don't need to focus on it.

---

# Anonymous functions

What happens if we assign a function to a variable?

```js
myGreeting();

let myGreeting = function () {
  console.log('hi');
};
```

---

[Next lecture: Functions](../lecture-3-functions)
