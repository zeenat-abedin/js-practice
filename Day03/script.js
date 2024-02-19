// Q.1 Write a function that returns a closure. The closure should add a given number to a private variable and return the result.

function outer(initialVal) {
  let privateVar = initialVal;
  function inner(number) {
    privateVar += number;
    return privateVar;
  }
  return inner;
}

let addToFive = outer(5);

console.log("first result", addToFive(3));
console.log("second result", addToFive(5));
console.log("third result", addToFive(7));

// Q.2 Create a closure that counts the number of times a function has been called and returns the count.

function createCounter() {
  let count = 0;

  function incrementCounter() {
    count++;
    return count;
  }

  return incrementCounter;
}

let counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// Q.3 Write a function that takes a string and returns  a closure. The closure should return the string with an additional suffix that is specified when creating the closure.

function addSuffix(str) {
  return function (suffix) {
    return str + suffix;
  };
}

let closure = addSuffix("Hello");
console.log(closure(" World"));

// Q.4 Implement a Javascript function that returns a closure. The closure should take a number as an argument and return a function that multiplies the number by a given factor.

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// Create a closure with factor 5
let multiplyBy5 = multiplier(5);

console.log(multiplyBy5(10));
console.log(multiplyBy5(7));
console.log(multiplyBy5(2));

// Q.5 Create a function that generates a random number and returns a closure. The closure should keep track of the last generated number and return true if a newly generated number is greater than the previous one, and false otherwise.

function numberTracker() {
  let lastNumber = null;

  return function () {
    const randomNumber = Math.random();

    if (lastNumber === null || randomNumber > lastNumber) {
      lastNumber = randomNumber;
      return true;
    } else {
      lastNumber = randomNumber;
      return false;
    }
  };
}

let trackNumber = numberTracker();

console.log(trackNumber());
console.log(trackNumber());
console.log(trackNumber());
console.log(trackNumber());
console.log(trackNumber());

// Q.6 Write a function that takes an array of names and returns a closure. The closure should iterate over the names and return the next name each time it is called.

function createNameIterator(names) {
  let index = 0;

  return function () {
    if (index >= names.length) {
      index = 0; // Reset the index to start from the beginning
    }

    return names[index++];
  };
}

const names = ["John", "Alice", "Bob"];
const getNextName = createNameIterator(names);

console.log(getNextName()); // Output: "John"
console.log(getNextName()); // Output: "Alice"
console.log(getNextName()); // Output: "Bob"
console.log(getNextName()); // Output: "John" (wrapped around to the beginning)
console.log(getNextName()); // Output: "Alice"
