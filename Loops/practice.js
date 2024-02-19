//1. Write a program to print the marks of a student in an object using for loop and also calculate the total marks, average marks. obj = { harry: 98, rohan: 70, aakash: 7}

let marks = {
  A: 90,
  B: 9,
  C: 85,
  D: 4,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

//2. Write the program in Q1 using for-in loop

for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}

//3. Write a program to print "try again" until the user enters the correct number

const prompt = require("prompt-sync")();

let correctNumber = 43;
let num;
console.log(num);
while (num != correctNumber) {
  console.log("Try again");
  num = prompt("Enter a number");
}
console.log("You have entered a correct number");

//4. Write a function to find mean of 5 numbers

const mean = (a, b, c, d, e) => (a + b + c + d + e) / 5;

console.log(mean(4, 6, 5, 7, 8));
