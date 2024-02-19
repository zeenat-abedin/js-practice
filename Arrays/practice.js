//1. Create an array of numbers and take input from the user to add number to this array
// let prompt = require("prompt-sync")();

// let arr = [24, 47, 65, 18, 29, 45];
// let a = prompt("Enter a number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

//2. Keep adding numbers to the array in 1 until 0 is added to the array
const prompt = require("prompt-sync")();

let arr2 = [24, 47, 65, 18, 29, 45, 78];
let b;
do {
  b = prompt("Enter a number");
  b = Number.parseInt(b);
  arr2.push(b);
} while (b != 0);

console.log(arr2);

//3. Filter for numbers divisible by 10 from a given array
let arr3 = [24, 47, 70, 65, 18, 10, 40, 50];
let c = arr3.filter((num) => num % 10 == 0);
console.log(c);

//4. Create an array of square of given numbers
let arr4 = [2, 7, 6, 8];
let d = arr4.map((num) => num * num);
console.log(d);

//5. Use reduce to calculate factorial of a given number from an array of first n natural numbers(n being the number whose factorial needs to be calculated)

let arr5 = [1, 2, 3, 4];
let e = arr5.reduce((acc, curr) => acc * curr);
console.log(e);
