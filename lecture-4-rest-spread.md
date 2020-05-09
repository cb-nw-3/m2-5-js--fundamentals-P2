# 2.5.4 - Rest/Spread

---

In 2015, JS introduced the `...` operator

It can be used in a number of different ways

---

# Rest

Let's say we want to write a function that takes an _unlimited_ number of arguments:

```js
function addAllArguments() {}

addAllArguments(3, 5); // Should return 8
addAllArguments(3, 5, 2); // Should return 10
addAllArguments(3, 5, 2, 11, -5); // Should return 16
```

---

# Rest

```js
function addAllArguments(...nums) {
  console.log(nums); // Is an array of all arguments
}
```

---

# Spread

Spread is kind of like the opposite of `Rest`

- Rest collects many arguments into an array
- Spread "spreads out" an array into many arguments

---

```js
const arr = [1, 2, 3, 4, 5];

addAllArguments(...arr);
```

---

You can use it to combine arrays:

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
```

---

[Next lecture: Switch](../lecture-5-switch-case)
