//check vowels in a string

function checkVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(checkVowels("zeenat"));

//check vowels in a string in a shortcut way

function checkVowelsInAStr(str) {
  return str.replace(/[^aeiou]/g, "").length;
}

console.log(checkVowelsInAStr("umbrella"));

let sentence = "qwerty world";
let word = /hello/;

console.log(word.test(sentence));

//extract first half of a string

function extractHalfOfAStr(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  } else {
    return str.slice(0, (str.length + 1) / 2);
  }
  return str;
}
console.log(extractHalfOfAStr("aerobica"));

//Write a JS function that finds the sum of all numbers in an array.

function sumArrayNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArrayNumbers(numbers);
console.log(totalSum);

//Write a JS function that sorts an array of numbers in ascending order.

function sortArrayAscending(numbers) {
  return numbers.sort(function (a, b) {
    return a - b;
  });
}

const arrOfNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortArrayAscending(numbers);
console.log(sortedNumbers);

//closure

function abc() {
  let a = 10;
  function def() {
    return a;
  }
  return def;
}

let letter = abc();
console.log(letter());

function outer() {
  let count = 0;
  function inner() {
    console.log(count++);
  }
  return inner;
}

let counter = outer();
counter();
counter();

let newWord = () => {};
